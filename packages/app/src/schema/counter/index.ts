import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

export default makeExecutableSchema({
  typeDefs: gql`
    type Counter {
      value: Int!
    }
    type Subscription {
      counter: Counter
    }
  `,
  resolvers: {
    Counter: {
      value: ({ value }) => value,
    },
    Subscription: {
      counter: {
        subscribe: (_root, _args, { pubsub }) => {
          const channel = Math.random().toString(36).substring(2, 15); // random channel name
          let value = 0;
          setInterval(
            () => pubsub.publish(channel, { counter: { value: value++ } }),
            15000
          );
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
