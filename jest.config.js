module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js'
  },
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each']
}
