import { useEffect, useState } from "react";
import { HelloService } from "./HelloService";
import { MessagesService } from "./MessagesService";
import { VideoService } from "./VideoService";

const helloService = new HelloService();

export function useHello() {
  const [state, setState] = useState({ hello: null });

  useEffect(() => {
    const subscriptions = [
      helloService
        .hello()
        .subscribe(({ hello }) => setState((state) => ({ ...state, hello }))),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
}

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

const videoService = new VideoService();

export function useVideo() {
  const [state, setState] = useState({ hello: null });

  useEffect(() => {
    const subscriptions = [
      videoService
        .onSignal()
        .subscribe(({ signal }) => setState((state) => ({ ...state, signal }))),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, { sendSignal: (signal) => videoService.sendSignal(signal) }];
}
