import type { IRule } from './interface'
import globals from 'globals'

const configPrettier = require('eslint-config-prettier')
const pluginPrettier = require('eslint-plugin-prettier')
const parserInstance = require('@typescript-eslint/parser')

export const createGlobalBaseConfig = () => {
  const config: IRule = {
    languageOptions: {
      ecmaVersion: 'latest', // default
      sourceType: 'module', // default
      parser: parserInstance,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.commonjs,
      },
      parserOptions: { ecmaFeatures: { globalReturn: true } },
    },
    // plugins: ['prettier'] : eslint-plugin-prettier
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // extends: ['prettier'] : eslint-config-prettier
      ...configPrettier.rules,
      // eslint-plugin-prettier overrides rules
      ...pluginPrettier.configs.recommended.rules,

      // self custom rules
      'prettier/prettier': 'warn',
      // unused vars
      'no-unused-vars': 'off',
      // no console/debugger
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  }

  return config
}
