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
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage',
  coverageReporters: [
    'html',
    'text',
    'lcov',
    'json',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      statements: 89,
      branches: 94,
      functions: 83,
      lines: 91,
    },
  },
};