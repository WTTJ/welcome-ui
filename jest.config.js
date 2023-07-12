module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
    '@welcome-ui/panda/jsx': '<rootDir>/node_modules/@welcome-ui/panda/jsx/index.mjs',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/mocks/setup.js'],
  modulePaths: ['<rootDir>/node_modules'],
  testEnvironment: 'jsdom',
}
