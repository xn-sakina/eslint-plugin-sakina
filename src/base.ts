import type { IRule, TsPluginParserOptions } from './interface'

const globals = require('globals')

const eslintConfigPrettier = require.resolve('eslint-config-prettier')
const configPrettier = require(eslintConfigPrettier)

const eslintPluginPrettier = require.resolve('eslint-plugin-prettier')
const pluginPrettier = require(eslintPluginPrettier)

const parser = require.resolve('@typescript-eslint/parser')
const parserInstance = require(parser)

const tsPlugin = require.resolve('@typescript-eslint/eslint-plugin')
const tsPluginInstance = require(tsPlugin)

export const createBaseConfig = (opts: {
  files: string[]
  tsPluginParserOpts?: TsPluginParserOptions
}) => {
  const { files, tsPluginParserOpts } = opts

  const base: IRule = {
    files,
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
      'no-unused-vars': 'off',
      // no console/debugger
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  }

  if (tsPluginParserOpts) {
    // add plugins
    base.plugins!['@typescript-eslint'] = tsPluginInstance
    // add rules
    base.rules = {
      ...base.rules,

      // unused var
      '@typescript-eslint/no-unused-vars': 'warn',
      // no floating promise
      '@typescript-eslint/no-floating-promises': 'warn',
    }

    // add tsconfig config
    base.languageOptions!.parserOptions = {
      ...base.languageOptions!.parserOptions,
      ...tsPluginParserOpts,
    }
  }

  return base
}
