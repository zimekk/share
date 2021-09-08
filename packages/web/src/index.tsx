import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/link-error";

const httpLink = new HttpLink({
  uri: `/graphql`,
  fetch: (uri, options) => {
    return fetch(uri, {
      ...options,
      headers: {
        ...options.headers,
      },
    });
  },
});
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
const splitLink = errorLink.concat(httpLink);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.body.appendChild(document.createElement("div"))
);
