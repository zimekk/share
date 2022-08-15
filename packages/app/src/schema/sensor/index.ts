import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

export default makeExecutableSchema({
  typeDefs: gql`
    type Sensor {
      value: Int!
    }
    type Subscription {
      sensor: Sensor
    }
  `,
  resolvers: {
    Sensor: {
      value: ({ value }) => value,
    },
    Subscription: {
      sensor: {
        subscribe: (_root, _args, { pubsub }) => {
          const channel = Math.random().toString(36).substring(2, 15); // random channel name
          let value = 0;
          setInterval(
            () => pubsub.publish(channel, { sensor: { value: value++ } }),
            15000
          );
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
