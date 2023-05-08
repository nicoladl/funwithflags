module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.(scss|less)$': '<rootDir>/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom'
};