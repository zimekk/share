import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

import type {
  Mutation,
  MutationAddMeasurementArgs,
  MutationRemoveMeasurementsArgs,
  Query,
} from "../../schema/types";

const channel = "SENSOR";

export default makeExecutableSchema({
  typeDefs: gql`
    scalar Date

    input MeasurementInput {
      date: Date!
      temperature: Float!
      humidity: Float!
    }
    type Measurement {
      date: Date!
      temperature: Float!
      humidity: Float!
    }
    type Sensor {
      data: String
    }
    type Mutation {
      addMeasurement(measurement: MeasurementInput!): Boolean
      removeMeasurements(ids: [ID!]): Boolean
    }
    type Query {
      getMeasurements: [Measurement!]
    }
    type Subscription {
      sensor: Sensor
    }
  `,
  resolvers: {
    Mutation: {
      addMeasurement: (
        _root,
        { measurement }: MutationAddMeasurementArgs,
        { pubsub }
      ): Mutation["addMeasurement"] =>
        pubsub.publish("MEASUREMENT", measurement),
      removeMeasurements: (
        _root,
        { ids }: MutationRemoveMeasurementsArgs,
        { pubsub }
      ): Mutation["removeMeasurements"] =>
        pubsub.publish("REMOVE_MEASUREMENTS", ids),
    },
    Query: {
      getMeasurements: (_root, _args, { db }): Query["getMeasurements"] =>
        db.getMeasurements(),
    },
    Subscription: {
      sensor: {
        subscribe(_root, _args, { pubsub }) {
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
