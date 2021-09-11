import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import styles from "./Messages.module.scss";

const MESSAGES = gql`
  query {
    messages {
      text
    }
  }
`;

const ON_MESSAGE = gql`
  subscription {
    message {
      text
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation sendMessage($message: MessageInput) {
    sendMessage(message: $message)
  }
`;

// https://dev.to/dsckiitdev/build-a-chat-app-with-graphql-subscriptions-typescript-part-3-30dd
export default function Messages() {
  const [text, setText] = useState("");
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { data, error, loading, subscribeToMore } = useQuery(MESSAGES);

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
    sendMessage({ variables: { message: { text } } })
      .then((data) => {
        console.log(["sendMessage"], { data });
      })
      .catch(console.error);
  };

  return (
    <div className={styles.Messages}>
      <input value={text} onChange={handleChangeText} />
      <button onClick={handleSendMessage}>send</button>
      {data && (
        <div>
          <pre>{data.messages.map(({ text }) => text).join("\n")}</pre>
        </div>
      )}
    </div>
  );
}
