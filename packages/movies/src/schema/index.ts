import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import fetch from "cross-fetch";

export default makeExecutableSchema({
  typeDefs: gql`
    scalar Movie

    type Query {
      movies(term: String): Movie
    }
  `,
  resolvers: {
    Query: {
      movies: (_, { term = "hulk" }) => {
        return fetch(
          `https://itunes.apple.com/search?media=all&term=${term}`
        ).then((response) => response.json());
      },
    },
  },
});
