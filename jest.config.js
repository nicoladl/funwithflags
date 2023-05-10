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
      statements: 92,
      branches: 97,
      functions: 85,
      lines: 94,
    },
  },
};