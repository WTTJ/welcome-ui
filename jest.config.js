module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/mocks/setup.js'],
  modulePaths: ['<rootDir>/node_modules'],
  testEnvironment: 'jest-environment-jsdom',
}
