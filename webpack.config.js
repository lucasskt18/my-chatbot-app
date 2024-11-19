const path = require("path");

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    ],
  },
  mode: "development",
};
