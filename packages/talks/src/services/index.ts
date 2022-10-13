import { useEffect, useState } from "react";
import { BrowserService } from "./BrowserService";
import { MessagesService } from "./MessagesService";
import { SensorService } from "./SensorService";

const messageService = new MessagesService();

// https://codesandbox.io/s/push-based-react-lab-3-vc8d6?file=/src/users/hooks/users.hook.ts
export function useMessages() {
  const [{ messages }, setState] = useState(() => ({
    messages: null,
  }));

  useEffect(() => {
    const subscriptions = [
      messageService
        .getMessages()
        .subscribe(({ messages }) =>
          setState((state) => ({ ...state, messages }))
        ),
      messageService.onMessage().subscribe(({ message }) =>
        setState(({ messages, ...state }) => ({
          ...state,
          messages: messages.concat([message]),
        }))
      ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    { messages },
    { sendMessage: (message) => messageService.sendMessage(message) },
  ];
}

const sensorService = new SensorService();

export function useSensor() {
  const [{ values }, setState] = useState(() => ({
    values: null,
  }));

  useEffect(() => {
    const subscriptions = [
      sensorService.onSensor().subscribe(({ sensor }) =>
        setState(({ values, ...state }) => ({
          ...state,
          values: (values || []).concat([sensor]),
        }))
      ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [{ values }, {}];
}

const browserService = new BrowserService();

export function useFiles() {
  const [state, setState] = useState({ files: null });

  useEffect(() => {
    const subscriptions = [
      browserService
        .files()
        .subscribe(({ files }) => setState((state) => ({ ...state, files }))),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
}
