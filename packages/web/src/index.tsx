import React, { createContext } from "react";
import { render } from "react-dom";
import App from "./containers/App";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "@apollo/link-error";
import { WebSocketLink } from "@apollo/link-ws";
import { nanoid } from "nanoid";
import { UserContextProvider } from "./UserContext";

const uuid = nanoid();

const httpLink = new HttpLink({
  uri: `${location.pathname}graphql`,
  fetch: (uri, options) => {
    return fetch(uri, {
      ...options,
      headers: {
        ...options.headers,
      },
    });
  },
});

const wsLink = new WebSocketLink({
  uri: `${{ "https:": "wss:" }[location.protocol] || "ws:"}//${location.host}${
    location.pathname
  }subscriptions`,
  options: {
    connectionParams: {
      uuid,
    },
    connectionCallback: (...args) =>
      console.info(["connectionCallback"], { args }),
    reconnect: true,
  },
});

const { subscriptionClient } = wsLink;

subscriptionClient.onConnected((...args) =>
  console.log(["onConnected"], { args })
);
subscriptionClient.onDisconnected((...args) =>
  console.log(["onDisconnected"], { args })
);
subscriptionClient.onReconnected((...args) =>
  console.log(["onReconnected"], { args })
);

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path, extensions }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Extensions Code: ${
            extensions && extensions.code
          }`
        );
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

const splitLink = errorLink.concat(
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  )
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});
render(
  <ApolloProvider client={client}>
    <UserContextProvider value={uuid}>
      <App />
    </UserContextProvider>
  </ApolloProvider>,
  document.body.appendChild(document.createElement("div"))
);
