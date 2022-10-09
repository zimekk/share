import { GraphQLClient } from "graphql-request";
import { createClient } from "graphql-ws";

// https://shammelburg.medium.com/subscriptions-with-graphql-dfa8279af050
// https://github.com/shammelburg/graphql-rxjs-angular/blob/main/src/app/services/graphql.service.ts
export const client = new GraphQLClient(`${location.pathname}graphql`, {
  headers: {
    // authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const subscriptions = createClient({
  url: `${{ "https:": "wss:" }[location.protocol] || "ws:"}//${location.host}${
    location.pathname
  }subscriptions`,
});
