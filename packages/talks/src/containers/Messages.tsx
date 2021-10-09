import React, { useState } from "react";
import { useMessages } from "../services";
import styles from "./Messages.module.scss";

// https://dev.to/dsckiitdev/build-a-chat-app-with-graphql-subscriptions-typescript-part-3-30dd
export default function Messages() {
  const [{ messages }, { sendMessage }] = useMessages();
  const [text, setText] = useState("");
  const uuid = null;

  const handleChangeText = (e) => {
    const { value: text } = e.target;
    setText(text);
  };

  const handleSendMessage = () => {
    setText("");
    sendMessage({ uuid, text });
  };

  return (
    <div className={styles.Messages}>
      <span>{uuid}</span>
      <input value={text} onChange={handleChangeText} />
      <button onClick={handleSendMessage}>send</button>
      {messages && (
        <div>
          <pre>
            {messages.map(({ uuid, text }) => `[${uuid}] ${text}`).join("\n")}
          </pre>
        </div>
      )}
    </div>
  );
}
