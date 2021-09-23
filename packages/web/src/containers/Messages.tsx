import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useUserContext } from "../UserContext";
import styles from "./Messages.module.scss";

const MESSAGES = gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`;

const ON_MESSAGE = gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`;

// https://dev.to/dsckiitdev/build-a-chat-app-with-graphql-subscriptions-typescript-part-3-30dd
export default function Messages() {
  const [text, setText] = useState("");
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { data, error, loading, subscribeToMore } = useQuery(MESSAGES);
  const uuid = useUserContext();

  useEffect(() => {
    subscribeToMore({
      document: ON_MESSAGE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { message } = subscriptionData.data;

        return {
          messages: prev.messages.concat(message),
        };
      },
    });
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleChangeText = (e) => {
    const { value: text } = e.target;
    setText(text);
  };

  const handleSendMessage = () => {
    setText("");
    sendMessage({ variables: { message: { uuid, text } } })
      .then((data) => {
        console.log(["sendMessage"], { data });
      })
      .catch(console.error);
  };

  return (
    <div className={styles.Messages}>
      <span>{uuid}</span>
      <input value={text} onChange={handleChangeText} />
      <button onClick={handleSendMessage}>send</button>
      {data && (
        <div>
          <pre>
            {data.messages
              .map(({ uuid, text }) => `[${uuid}] ${text}`)
              .join("\n")}
          </pre>
        </div>
      )}
    </div>
  );
}
