/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
  "globalTeardown":"./global-kill.js",
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  "globalTeardown":"./global-kill.ts"
};

