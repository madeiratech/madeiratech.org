module.exports = {
  entry: "./src/index.js",
  mode: "production",
  target: "webworker",
  output: {
    pathinfo: false
  },
  devtool: "none",
  optimization: {
    minimize: true
  }
};
