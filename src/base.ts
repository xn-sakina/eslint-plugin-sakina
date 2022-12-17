const globals = require('globals')

const eslintConfigPrettier = require.resolve('eslint-config-prettier')
const configPrettier = require(eslintConfigPrettier)

const eslintPluginPrettier = require.resolve('eslint-plugin-prettier')
const pluginPrettier = require(eslintPluginPrettier)

const parser = require.resolve('@typescript-eslint/parser')
const parserInstance = require(parser)

import type { ParserOptions } from '@typescript-eslint/parser'

export const base = [
  {
    files: ['**/*.ts?(x)', '**/*.js?(x)'],
    ignores: ['**/dist/**', '**/node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest', // default
      sourceType: 'module', // default
      parser: parserInstance,
      globals: {
        ...globals.commonjs,
        ...globals.browser,
        ...globals.es2021, // latest
        ...globals.node,
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
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      // no console/debugger
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
] as IRules

interface IRules extends Array<IRule> {}

type Matcher = (path: string) => boolean

interface ILanguageOptions {
  ecmaVersion: string
  sourceType: 'module' | 'script'
  parser: string | ((...args: any[]) => any)
  globals: Record<string, boolean>
  parserOptions: ParserOptions
}

interface IRule {
  files?: Array<string | Matcher>
  ignores?: Array<string | Matcher>
  languageOptions?: Partial<ILanguageOptions>
  plugins?: Record<string, any>
  rules?: Record<string, any>
}
