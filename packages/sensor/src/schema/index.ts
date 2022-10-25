import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

const channel = "SENSOR";

export default makeExecutableSchema({
  typeDefs: gql`
    scalar Date

    input MeasurementInput {
      date: Date
      temperature: Float
      humidity: Float
    }
    type Measurement {
      date: Date
      temperature: Float
      humidity: Float
    }
    type Sensor {
      data: String
    }
    type Mutation {
      addMeasurement(measurement: MeasurementInput): Boolean
    }
    type Query {
      getMeasurements: [Measurement]
    }
    type Subscription {
      sensor: Sensor
    }
  `,
  resolvers: {
    Mutation: {
      addMeasurement: (_root, { measurement }, { pubsub }) => {
        pubsub.publish("MEASUREMENT", measurement);
      },
    },
    Query: {
      getMeasurements: (_root, _args, { db }) => db.getMeasurements(),
    },
    Subscription: {
      sensor: {
        subscribe: (_root, _args, { pubsub }) => {
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
