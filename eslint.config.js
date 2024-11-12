import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import baseConfig from './configs/eslint.base.config.js';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // Include any other plugins from the base config
      ...baseConfig.plugins,
    },
    env: {
      // Extend the env settings from base config
      ...baseConfig.env,
      node: true, // You can also add project-specific environments
    },
    parserOptions: {
      // Extend parserOptions from base config
      ...baseConfig.parserOptions,
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      // Extend rules from base config
      ...baseConfig.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
    },
  }
);
