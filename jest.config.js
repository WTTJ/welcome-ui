module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/mocks/setup.js'],
  modulePaths: ['<rootDir>/node_modules'],
  testEnvironment: 'jsdom',
}
