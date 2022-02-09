const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const common = require("./webpack.common.js");
const paths = require("./paths");

const CleanPluginConfig = new CleanWebpackPlugin();
const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
  analyzerMode: "static",
  openAnalyzer: false,
});

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: `${paths.jsFolder}/[name].[contenthash].js`,
    path: paths.outputPath,
    publicPath: "/",
    clean: true,
    hashFunction: "xxhash64",
  },
  plugins: [CleanPluginConfig, BundleAnalyzerPluginConfig],
});
