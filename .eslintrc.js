module.exports = {
    env: {
      node: true,
      es2021: true,
      jest: true, // Jest for testing
    },
    extends: [
      'eslint:recommended', //recommended ESLint rules
    ],
    parserOptions: {
      ecmaVersion: 12, // Use ECMAScript 2021
      sourceType: 'module', // Enable ES modules
    },
    rules: {
      // Customize your rules here
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  };