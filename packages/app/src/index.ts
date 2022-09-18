import express, { Router, json } from "express";
import { graphqlHTTP } from "express-graphql";
import { PubSub } from "graphql-subscriptions";
import schema from "./schema";

const PORT = 8080;
const endpoint = "/graphql";
const subscriptionEndpoint = "/subscriptions";

const context = {
  pubsub: new PubSub(),
};

export { schema };

export const useServer = (server) => (
  require("@dev/sensor").signal(context),
  require("graphql-ws/lib/use/ws").useServer(
    {
      schema,
      context,
    },
    server
  )
);

export const router = Router()
  .use("/api", (req, res) => res.json({ hello: "Hello" }))
  .use("/longpoll", json(), (req, res) => {
    const { time = 0, delay = 1000 } = req.body;
    console.log({ time, delay });
    setTimeout(() => res.json({ time }), delay);
  })
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
  );

class Server {
  options: Object;

  constructor(options = {}) {
    this.options = options;

    if (typeof options.setupExitSignals === "undefined") {
      options.setupExitSignals = true;
    }
  }

  async initialize() {
    this.setupApp();
    this.setupFeatures();
    this.createServer();

    if (this.options.setupExitSignals) {
      const signals = ["SIGINT", "SIGTERM"];
      const exitProcess = () => process.exit();
      signals.forEach((signal) => {
        process.on(signal, () => this.stopCallback(exitProcess));
      });
    }
  }

  setupApp() {
    this.app = new express();
  }

  setupStaticFeature() {
    this.options.static.forEach((staticOption) => {
      staticOption.publicPath.forEach((publicPath) => {
        this.app.use(
          publicPath,
          express.static(staticOption.directory, staticOption.staticOptions)
        );
      });
    });
  }

  setupOnBeforeSetupMiddlewareFeature() {
    this.options.onBeforeSetupMiddleware(this);
  }

  setupFeatures() {
    const features = {
      static: () => {
        this.setupStaticFeature();
      },
      onBeforeSetupMiddleware: () => {
        if (typeof this.options.onBeforeSetupMiddleware === "function") {
          this.setupOnBeforeSetupMiddlewareFeature();
        }
      },
    };

    const runnableFeatures = [];

    if (this.options.onBeforeSetupMiddleware) {
      runnableFeatures.push("onBeforeSetupMiddleware");
    }

    if (this.options.static) {
      runnableFeatures.push("static");
    }

    runnableFeatures.forEach((feature) => {
      features[feature]();
    });
  }

  createServer() {
    this.server = require("http").createServer(this.app);
    this.server.on("error", (error) => {
      throw error;
    });
  }

  async start() {
    this.logger = console;

    await this.initialize();

    const listenOptions = { host: this.options.host, port: this.options.port };

    await new Promise((resolve) => {
      this.server.listen(listenOptions, () => {
        resolve();
      });
    });

    if (typeof this.options.onListening === "function") {
      this.options.onListening(this);
    }
  }

  async stop() {
    if (this.server) {
      await new Promise((resolve) => {
        this.server.close(() => {
          this.server = null;

          resolve();
        });

        for (const socket of this.sockets) {
          socket.destroy();
        }

        this.sockets = [];
      });

      if (this.middleware) {
        await new Promise((resolve, reject) => {
          this.middleware.close((error) => {
            if (error) {
              reject(error);

              return;
            }

            resolve();
          });
        });

        this.middleware = null;
      }
    }
  }

  stopCallback(callback) {
    this.stop().then(() => callback(null), callback);
  }
}

// https://stackoverflow.com/questions/6398196/detect-if-called-through-require-or-directly-by-command-line
if (process.mainModule.filename === __filename) {
  const defaultOptionsForStatic = {
    directory: require("path").join(process.cwd(), "public"),
    staticOptions: {},
    publicPath: ["/"],
    serveIndex: { icons: true },
  };

  const middleware = router;

  const server = new Server({
    port: PORT,
    static: [defaultOptionsForStatic],
    onBeforeSetupMiddleware: async function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      devServer.app.use(require("morgan")("combined")).use(middleware);
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      // https://github.com/websockets/ws#client-authentication
      useServer(
        new (require("ws").Server)({
          server: devServer.server,
          path: subscriptionEndpoint,
        })
      );

      const port = devServer.server.address().port;
      console.log(`Listening on port: ${port}`);
    },
  });

  server.start();
}
