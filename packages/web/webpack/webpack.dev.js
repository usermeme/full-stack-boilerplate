const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: `${paths.jsFolder}/[name].bundle.js`,
    path: paths.outputPath,
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    static: [{ directory: paths.publicDirectoryPath, watch: false }],
    port: "auto",
    hot: true,
    open: true,
  },
});
