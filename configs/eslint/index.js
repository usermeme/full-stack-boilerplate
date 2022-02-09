module.exports = {
  extends: [
    "prettier",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    package: ["./tsconfig.json"],
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "func-names": ["error", "never"],
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
