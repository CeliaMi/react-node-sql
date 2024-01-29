/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
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
};

