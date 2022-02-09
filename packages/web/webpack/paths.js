const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  srcPath: path.resolve(__dirname, "../", "src"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  entryPath: path.resolve(__dirname, "../", "src/index.tsx"),
  templatePath: path.resolve(__dirname, "../", "public/index.html"),
  publicDirectoryPath: path.resolve(__dirname, "../", "public"),
  jsFolder: "js",
  cssFolder: "css",
  fontsFolder: "fonts",
  imagesFolder: "images",
};
