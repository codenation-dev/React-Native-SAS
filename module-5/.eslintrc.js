module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/style'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    "react-hooks/exhaustive-deps": 0,
  }
};
