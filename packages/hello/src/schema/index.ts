import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

export default makeExecutableSchema({
  typeDefs: gql`
    type Query {
      hello(name: String): String!
    }
  `,
  resolvers: {
    Query: {
      hello: (_, { name }) => `Hello ${name || "World"}`,
    },
  },
});
