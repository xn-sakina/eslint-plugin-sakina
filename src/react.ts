import type { ICreateConfigOptions, IRule } from './interface'
import createRecommendConfig from './recommended'

const reactHooksPlugin = require('eslint-plugin-react-hooks')

function createReactConfig(opts: ICreateConfigOptions = {}) {
  const baseConfigs = createRecommendConfig(opts)

  const reactConfig: IRule = {
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
  }

  return [...baseConfigs, reactConfig]
}

export = createReactConfig
