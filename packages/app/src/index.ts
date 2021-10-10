import express, { Router } from "express";
// import cors from "cors";
import path from "path";
import ws from "ws";
import { gql } from "apollo-server";
import { graphqlHTTP } from "express-graphql";
import { PubSub } from "graphql-subscriptions";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";

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
    uuid: String
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
    uuid: String
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

const data = {
  connections: [],
  messages: [],
};

type Message = { uuid: string; text: string };

const sendMessage = (message: Message) => {
  console.log({ message });
  data.messages.push(message);
  pubsub.publish(CHANNELS.MESSAGE, { message });
};

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    messages: () => data.messages,
  },
  Counter: {
    value: ({ value }) => value,
  },
  Mutation: {
    sendMessage: (_, { message }) => {
      sendMessage(message);
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

// https://shammelburg.medium.com/subscriptions-with-graphql-dfa8279af050
// https://shammelburg.medium.com/folder-schema-structure-with-graphql-1c8c0ad10717

const pubsub = new PubSub();

// https://www.graphql-tools.com/docs/generate-schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 8080;

const endpoint = "/graphql";
const subscriptionEndpoint = "/subscriptions";

const context = {
  pubsub,
};

const app = express()
  .use(
    endpoint,
    graphqlHTTP({
      schema,
      graphiql: {
        // @ts-ignore
        subscriptionEndpoint: `ws://localhost:${PORT}${subscriptionEndpoint}`,
      },
      pretty: true,
      context,
    })
  )
  .use(web);

// https://github.com/enisdenjo/graphql-ws
const server = app.listen(PORT, () => {
  const { port }: any = server.address();

  // create and use the websocket server
  const wsServer = new ws.Server({
    server,
    path: subscriptionEndpoint,
  });
  useServer({ schema, context }, wsServer);

  console.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default server;

// const server = new GraphQLServer({
//   typeDefs,
//   resolvers,
//   context: ({ request, response }) =>
//     Promise.resolve({
//       pubsub,
//     }),
// });

// const PORT = 8080;

// server.express
//   // .use(require("morgan")("combined"))
//   // .use(cors({ origin: '*'}))
//   .use(web);

// export default server.start(
//   {
//     port: PORT,
//     endpoint: "/graphql",
//     subscriptions: {
//       path: "/subscriptions",
//       onConnect: (connectionParams, webSocket, context) => {
//         const { uuid } = connectionParams;
//         Object.assign(webSocket, { uuid });
//         console.info(["onConnect"], { connectionParams, context });
//         data.connections.push(uuid);
//         sendMessage({
//           uuid,
//           text: `connected; connections: ${data.connections.join(", ")}`,
//         });
//       },
//       onDisconnect: (webSocket, context) => {
//         const { uuid } = webSocket;
//         console.info(["onDisconnect"], { context });
//         Object.assign(data, {
//           connections: data.connections.filter((item) => item !== uuid),
//         });
//         sendMessage({
//           uuid,
//           text: `disconnected; connections: ${data.connections.join(", ")}`,
//         });
//       },
//     },
//     playground: "/playground",
//   },
//   ({ port }) =>
//     console.info(`⚡️[server]: Server is running at http://localhost:${port}`)
// );
