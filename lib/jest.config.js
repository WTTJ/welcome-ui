module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/styleMock.ts',
    '^@/theme$': '<rootDir>/src/theme',
    '^@/utils$': '<rootDir>/src/utils',
    '^@/fonts/(.*)$': '<rootDir>/src/components/IconsFont/fonts/$1',
    '^@/(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  modulePaths: ['<rootDir>/node_modules'],
  testEnvironment: 'jest-environment-jsdom',
}
