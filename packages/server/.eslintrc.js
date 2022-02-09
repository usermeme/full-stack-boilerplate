const config = require("@configs/eslint");
const deepMerge = require("deepmerge");

module.exports = deepMerge(config, {
  env: {
    node: true,
  },
});
