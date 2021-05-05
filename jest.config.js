module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
  coverageReporters: ['lcov', 'text'],
};
