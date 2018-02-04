const path = require("path");

const root = path.resolve(__dirname);

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(root, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(root, "src")],
        loader: "awesome-typescript-loader"
      }
    ]
  }
};
