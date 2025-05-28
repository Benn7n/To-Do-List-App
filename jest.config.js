// jest.config.js

export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|html)$': '<rootDir>/tests/mocks/fileMock.js'
  }
};
