import express, { Router } from "express";
import http from "http";
// import cors from "cors";
import path from "path";
import ws from "ws";
import { graphqlHTTP } from "express-graphql";
import { PubSub } from "graphql-subscriptions";
import { useServer } from "graphql-ws/lib/use/ws";
import schema from "./schema";

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

const PORT = 8080;

const endpoint = "/graphql";
const subscriptionEndpoint = "/subscriptions";

const context = {
  pubsub: new PubSub(),
};

// https://www.graphql-tools.com/docs/server-setup#setup-an-http-server
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

// https://www.graphql-tools.com/docs/server-setup#adding-subscriptions-support
export const server = http.createServer(app);

// https://github.com/websockets/ws#client-authentication
const wsServer = new ws.Server({
  server,
  path: subscriptionEndpoint,
});

// https://github.com/enisdenjo/graphql-ws
server.listen(PORT, () => {
  const { port }: any = server.address();

  useServer({ schema, context }, wsServer);

  console.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
