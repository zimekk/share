import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import { createClient } from "graphql-ws";
import { HelloService } from "./HelloService";
import { MessagesService } from "./MessagesService";
import { VideoService } from "./VideoService";

// https://shammelburg.medium.com/subscriptions-with-graphql-dfa8279af050
// https://github.com/shammelburg/graphql-rxjs-angular/blob/main/src/app/services/graphql.service.ts
const subscriptions = createClient({
  url: `${{ "https:": "wss:" }[location.protocol] || "ws:"}//${location.host}${
    location.pathname
  }subscriptions`,
});

const client = new GraphQLClient(`${location.pathname}graphql`, {
  headers: {
    // authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const messageService = new MessagesService({ client, subscriptions });

// https://codesandbox.io/s/push-based-react-lab-3-vc8d6?file=/src/users/hooks/users.hook.ts
export function useMessages() {
  const [state, setState] = useState({ messages: null });

  useEffect(() => {
    const subscriptions = [
      messageService
        .getMessages()
        .subscribe(
          ({ messages }) => setState((state) => ({ ...state, messages })),
          console.error
        ),
      messageService
        .onMessage()
        .subscribe(
          ({ message }) =>
            setState(({ messages, ...state }) => ({
              ...state,
              messages: messages.concat([message]),
            })),
          console.error
        ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    state,
    { sendMessage: (message) => messageService.sendMessage(message) },
  ];
}

const helloService = new HelloService({ client });

export function useHello() {
  const [state, setState] = useState({ hello: null });

  useEffect(() => {
    const subscriptions = [
      helloService
        .hello()
        .subscribe(
          ({ hello }) => setState((state) => ({ ...state, hello })),
          console.error
        ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
}

const videoService = new VideoService({ client, subscriptions });

export function useVideo() {
  const [state, setState] = useState({ hello: null });

  useEffect(() => {
    const subscriptions = [
      videoService
        .onSignal()
        .subscribe(
          ({ signal }) => setState((state) => ({ ...state, signal })),
          console.error
        ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, { sendSignal: (signal) => videoService.sendSignal(signal) }];
}
