const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
require("dotenv").config();

module.exports = {
  entry: paths.entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: `${paths.imagesFolder}/[hash][ext][query]`,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: `${paths.fontsFolder}/[hash][ext][query]`,
        },
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
    alias: { "@mui/styled-engine": "@mui/styled-engine-sc" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      templateParameters: {
        API_URL: process.env.API_URL,
      },
    }),
  ],
};
