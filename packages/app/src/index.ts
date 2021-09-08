import express, { Router } from "express";
// import cors from "cors";
import path from "path";
import { GraphQLServer, PubSub } from "graphql-yoga";
import { gql } from "apollo-server";

const typeDefs = gql`
  type Counter {
    count: Int!
    countStr: String
  }
  type Query {
    hello(name: String): String!
  }
  type Subscription {
    counter: Counter!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
  Counter: {
    countStr: (counter) => `Current count: ${counter.count}`,
  },
  Subscription: {
    counter: {
      subscribe: (_, args, { pubsub }) => {
        const channel = Math.random().toString(36).substring(2, 15); // random channel name
        let count = 0;
        setInterval(
          () => pubsub.publish(channel, { counter: { count: count++ } }),
          20000
        );
        return pubsub.asyncIterator(channel);
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
