import path from "path";
import webpack from "webpack";
import env from "dotenv";

const { MI_USERNAME = "", MI_PASSWORD = "" } = env.config({
  path: path.resolve(__dirname, "../../.env"),
}) as Record<string, string>;

export default (_env, { mode }, dev = mode === "development") => ({
  target: "web",
  devServer: {
    // https: false,
    // hot: true,
    hot: false,
    // liveReload: false,
    // client: {
    //   webSocketTransport: 'sockjs',
    // },
    // webSocketServer: 'sockjs',
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    // allowedHosts: 'all',
    devMiddleware: {
      writeToDisk: true,
    },
  },
  // devtool: dev ? "eval-cheap-source-map" : "source-map",
  devtool: dev ? "cheap-module-source-map" : "source-map",
  entry: {
    main: [
      // "webpack-dev-server/client?http://localhost:8080/test",
      // "react-hot-loader/patch",
    ].concat(require.resolve("./src")),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(jpg|mov|mp3|ogg|png|avi)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          // plugins: [].concat(dev ? "react-hot-loader/babel" : []),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
      // "react-dom": "@hot-loader/react-dom",
    },
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      FFMPEG_CORE_PATH: "ffmpeg/ffmpeg-core.js",
      MI_USERNAME,
      MI_PASSWORD,
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new (require("copy-webpack-plugin"))({
      patterns: [
        {
          context: path.resolve(__dirname, "src/assets"),
          from: "manifest.json",
          // to: "[name]",
          transform: function (content, path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify(
                {
                  // description: process.env.npm_package_description,
                  version: process.env.npm_package_version,
                  ...JSON.parse(content.toString()),
                },
                null,
                2
              )
            );
          },
        },
      ],
    }),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new (require("html-webpack-plugin"))({
      favicon: require.resolve("./src/assets/favicon.ico"),
      // meta: {
      //   referrer: 'no-referrer'
      // }
    }),
  ].filter(Boolean),
});
