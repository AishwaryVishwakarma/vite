// jest.config.ts
import baseConfig from './configs/jest.base.config';

const config = {
  ...baseConfig,
  // Override or add project-specific settings here

  // For example, if you need to change the test environment to jsdom for frontend tests:
  testEnvironment: 'jsdom',

  // Add custom setup file after environment setup
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // You can also customize coverage collection from specific files or directories
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],

  // Custom moduleNameMapper for aliasing
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1', // Alias mapping example
  },

  // Custom reporters or other settings for your project
  reporters: ['default', 'jest-junit'],
};

export default config;
