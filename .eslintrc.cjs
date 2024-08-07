/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    shopify: "readonly",
  },
  plugins: ["react", "import", "@typescript-eslint"],
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
};
