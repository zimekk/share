import path from "path";
import { Subject } from "rxjs";
import { first, withLatestFrom } from "rxjs/operators";

const subscriptionEndpoint = "/subscriptions";

const subject$ = new Subject();
const resolve$ = new Subject();

subject$
  .pipe(withLatestFrom(resolve$))
  .subscribe(([args, { router }]: any) => router(...args));

class RequireResolvePlugin {
  options = {};
  constructor(options = {}) {
    Object.assign(this, { options });
  }

  emit(compilation, callback) {
    const [asset]: any = Object.values(compilation.assets);
    resolve$.next(require("require-from-string")(asset.source()));
    return callback();
  }

  apply(compiler) {
    const { name } = this.constructor;
    compiler.hooks.emit.tapAsync({ name }, this.emit.bind(this));
  }
}

const config = (env, { mode }, dev = mode === "development") => ({
  name: "server",
  target: "node",
  devtool: dev ? "eval" : "source-map",
  entry: {
    index: require.resolve("./src"),
  },
  externalsPresets: { node: true },
  externals: [
    // https://github.com/liady/webpack-node-externals#configuration
    require("webpack-node-externals")({
      additionalModuleDirs: ["../../node_modules"],
      allowlist: [/^@dev\//],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    clean: true,
    library: {
      type: "commonjs2",
    },
    path: path.resolve(__dirname, "lib"),
  },
  plugins: [dev && new RequireResolvePlugin()].filter(Boolean),
});

export default (env, argv) =>
  Promise.all([
    (({ devServer, output, ...config }) => ({
      name: "client",
      ...config,
      devServer: {
        ...devServer,
        // https://github.com/websockets/ws/issues/1692
        proxy: {
          // https://stackoverflow.com/questions/57768951/webpack-dev-server-and-websockets
          [subscriptionEndpoint]: {
            target: "ws://0.0.0.0:8081",
            ws: true,
          },
        },
        onBeforeSetupMiddleware: async function (devServer) {
          if (!devServer) {
            throw new Error("webpack-dev-server is not defined");
          }

          const middleware = (...args: any) => subject$.next(args);
          devServer.app.use(middleware);
        },

        onListening: function (devServer) {
          if (!devServer) {
            throw new Error("webpack-dev-server is not defined");
          }

          const wss = new (require("ws").WebSocketServer)({
            port: 8081,
            path: subscriptionEndpoint,
          });
          resolve$.pipe(first()).subscribe(({ useServer }) => useServer(wss));

          const port = devServer.server.address().port;
          console.log(`Listening on port: ${port}`);
        },
      },
      output: {
        ...output,
        path: path.resolve(__dirname, "public"),
      },
    }))(require("@dev/web/webpack.config").default(env, argv)),
    config(env, argv),
  ]);
