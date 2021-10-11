import { join } from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { CHANNELS } from "../../constants";

export default makeExecutableSchema({
  typeDefs: mergeTypeDefs(loadFilesSync(join(__dirname, "**/*.graphql"))),
  resolvers: {
    Mutation: {
      sendSignal: (_, { signal }, { pubsub }) => {
        console.log({ signal });
        pubsub.publish(CHANNELS.SIGNAL, { signal });
        return true;
      },
    },
    Subscription: {
      signal: {
        subscribe: (_root, _args, { pubsub }) =>
          pubsub.asyncIterator(CHANNELS.SIGNAL),
      },
    },
  },
});
