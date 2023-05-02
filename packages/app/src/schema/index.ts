// import { join } from "path";
import { mergeSchemas } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
// import { loadFilesSync } from "@graphql-tools/load-files";
import gql from "graphql-tag";

// https://www.graphql-tools.com/docs/schema-merging
export default mergeSchemas({
  schemas: [
    require("./browser").default,
    require("./counter").default,
    require("@dev/hello/schema").default,
    require("@dev/lan/schema").default,
    require("@dev/mihome/schema").default,
    require("@dev/movies/schema").default,
    require("@dev/remote/schema").default,
    require("@dev/sensor/schema").default,
    require("@dev/schedule/schema").default,
    require("@dev/video/schema").default,
  ],
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
  ]),
  resolvers: mergeResolvers([
    // ...loadFilesSync(join(__dirname, "resolvers")),
    require("./resolvers/messageResolver").default,
  ]),
});
