import React, { useEffect, useState } from "react";
import { gql } from "graphql-request";
import { from } from "rxjs";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

const HELLO = gql`
  query {
    hello
  }
`;

class Service {
  client = client;
  subscriptions = subscriptions;
}

export class HelloService extends Service {
  hello() {
    return from(this.client.request(HELLO));
  }
}

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

export default function Hello() {
  const [{ hello }] = useHello();

  return (
    <section>
      {hello === null ? (
        <div>Loading...</div>
      ) : (
        <h2 className={styles.Hello}>{hello}</h2>
      )}
    </section>
  );
}
