import { join } from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { CHANNELS } from "../../constants";

export default makeExecutableSchema({
  // typeDefs: mergeTypeDefs(loadFilesSync(join(__dirname, "**/*.graphql"))),
  typeDefs: `
    input CandidateInput {
      candidate: String
      sdpMLineIndex: Int
      sdpMid: String
    }
    input SignalInput {
      sdp: String
      type: String
      candidate: CandidateInput
    }
    type Candidate {
      candidate: String
      sdpMLineIndex: Int
      sdpMid: String
    }
    type Signal {
      sdp: String
      type: String
      candidate: Candidate
    }
    type Mutation {
      sendSignal(signal: SignalInput): Boolean
    }
    type Subscription {
      signal: Signal
    }
  `,
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
