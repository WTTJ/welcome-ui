module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
    'react-final-form': '<rootDir>/node_modules/react-final-form'
  },
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '<rootDir>/mocks/setup.js'],
  modulePaths: ['<rootDir>/node_modules']
}
