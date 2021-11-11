import { join } from "path";
import { mergeSchemas } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import gql from "graphql-tag";

// https://www.graphql-tools.com/docs/schema-merging
export default mergeSchemas({
  schemas: [require("./counter").default, require("./signal").default],
  typeDefs: mergeTypeDefs([
    // ...loadFilesSync(join(__dirname, "types/**/*.graphql")),
    gql`
      input MessageInput {
        uuid: String
        text: String
      }
      type Message {
        uuid: String
        text: String
      }
      type Mutation {
        sendMessage(message: MessageInput): Boolean
      }
      type Query {
        messages: [Message]
      }
      type Subscription {
        message: Message
      }
    `,
    gql`
      type Query {
        hello(name: String): String!
      }
    `,
  ]),
  resolvers: mergeResolvers([
    // ...loadFilesSync(join(__dirname, "resolvers")),
    require("./resolvers/messageResolver").default,
    {
      Query: {
        hello: (_, { name }) => `Hello ${name || "World"}`,
      },
    },
  ]),
});
