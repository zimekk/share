import express, { Router } from "express";
// import cors from "cors";
import path from "path";
import { GraphQLServer, PubSub } from "graphql-yoga";
import { gql } from "apollo-server";

const CHANNELS = {
  MESSAGE: "MESSAGE",
  SIGNAL: "SIGNAL",
};

const typeDefs = gql`
  input CandidateInput {
    candidate: String
    sdpMLineIndex: Int
    sdpMid: String
  }
  input MessageInput {
    text: String
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
  type Counter {
    value: Int!
  }
  type Signal {
    sdp: String
    type: String
    candidate: Candidate
  }
  type Message {
    text: String
  }
  type Mutation {
    sendSignal(signal: SignalInput): Boolean
    sendMessage(message: MessageInput): Boolean
  }
  type Query {
    hello(name: String): String!
    messages: [Message]
  }
  type Subscription {
    counter: Counter
    message: Message
    signal: Signal
  }
`;

const messages = [];

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    messages: (_root, _args) => messages,
  },
  Counter: {
    value: ({ value }) => value,
  },
  Mutation: {
    sendMessage: (_, { message }, { pubsub }) => {
      console.log({ message });
      messages.push(message);
      pubsub.publish(CHANNELS.MESSAGE, { message });
      return true;
    },
    sendSignal: (_, { signal }, { pubsub }) => {
      console.log({ signal });
      pubsub.publish(CHANNELS.SIGNAL, { signal });
      return true;
    },
  },
  Subscription: {
    counter: {
      subscribe: (_root, _args, { pubsub }) => {
        const channel = Math.random().toString(36).substring(2, 15); // random channel name
        let value = 0;
        setInterval(
          () => pubsub.publish(channel, { counter: { value: value++ } }),
          15000
        );
        return pubsub.asyncIterator(channel);
      },
    },
    message: {
      subscribe: (_root, _args, { pubsub }) => {
        return pubsub.asyncIterator(CHANNELS.MESSAGE);
      },
    },
    signal: {
      subscribe: (_root, _args, { pubsub }) => {
        return pubsub.asyncIterator(CHANNELS.SIGNAL);
      },
    },
  },
};

const web =
  process.env.NODE_ENV === "development"
    ? (({ entry, ...config }) => {
        const compiler = require("webpack")({
          mode: "development",
          entry: ["webpack-hot-middleware/client"].concat(entry),
          ...config,
        });

        return Router()
          .use(
            require("webpack-dev-middleware")(compiler, {
              publicPath: config.output?.publicPath,
            })
          )
          .use(require(`webpack-hot-middleware`)(compiler, {}));
      })(require("@dev/web/webpack.config").default)
    : Router().use(
        express.static(
          path.resolve(
            path.dirname(require.resolve("@dev/web/package")),
            "public"
          )
        )
      );

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request, response }) =>
    Promise.resolve({
      pubsub,
    }),
});

const PORT = 8080;

server.express
  // .use(require("morgan")("combined"))
  // .use(cors({ origin: '*'}))
  .use(web);

export default server.start(
  {
    port: PORT,
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
  },
  ({ port }) =>
    console.info(`⚡️[server]: Server is running at http://localhost:${port}`)
);
