import { useEffect, useState } from "react";
import { BrowserService } from "./BrowserService";
import { HelloService } from "./HelloService";
import { MessagesService } from "./MessagesService";
import { SensorService } from "./SensorService";
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
