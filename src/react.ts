import { base } from './base'
import type { IRules } from './interface'

const reactHooks = require.resolve('eslint-plugin-react-hooks')
const reactHooksPlugin = require(reactHooks)

const configs: IRules = [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

export = configs
