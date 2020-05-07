module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
  collectCoverageFrom: ['src/**/*.js'],
};
