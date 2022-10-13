import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

const channel = "SENSOR";

export default makeExecutableSchema({
  typeDefs: gql`
    type Sensor {
      data: String
    }
    type Subscription {
      sensor: Sensor
    }
  `,
  resolvers: {
    Subscription: {
      sensor: {
        subscribe: (_root, _args, { pubsub }) => {
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
