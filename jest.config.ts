/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type {Config} from 'jest';

import baseConfig from './configs/jest.base.config';

const config: Config = {
  ...baseConfig,
};

export default config;
