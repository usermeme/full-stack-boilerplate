const config = require("@configs/eslint");
const deepMerge = require("deepmerge");

module.exports = deepMerge(config, {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
  },
});
