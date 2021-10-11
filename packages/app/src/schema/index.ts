import { join } from "path";
import { mergeSchemas } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import gql from "graphql-tag";

// https://www.graphql-tools.com/docs/schema-merging
export default mergeSchemas({
  schemas: [require("./counter").default, require("./signal").default],
  typeDefs: mergeTypeDefs([
    ...loadFilesSync(join(__dirname, "types/**/*.graphql")),
    gql`
      type Query {
        hello(name: String): String!
      }
    `,
  ]),
  resolvers: mergeResolvers([
    ...loadFilesSync(join(__dirname, "resolvers")),
    {
      Query: {
        hello: (_, { name }) => `Hello ${name || "World"}`,
      },
    },
  ]),
});
