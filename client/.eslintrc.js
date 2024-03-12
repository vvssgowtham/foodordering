module.exports = {
  // ...other ESLint configuration options

  rules: {
    // ...other rules
    "jsx-a11y/anchor-is-valid": "off",
    'no-unused-vars': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
};
