import { IRule, TsPluginParserOptions } from './interface'

const tsPluginInstance = require('@typescript-eslint/eslint-plugin')

export const createTSConfig = (opts: {
  files: string[]
  tsPluginParserOptions: TsPluginParserOptions
  tsx?: boolean
}) => {
  const { files, tsPluginParserOptions, tsx } = opts
  const config: IRule = {
    files,
    plugins: {
      '@typescript-eslint': tsPluginInstance,
    },
    rules: {
      // unused var
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // no floating promise
      '@typescript-eslint/no-floating-promises': 'warn',
    },
    languageOptions: {
      parserOptions: {
        ...tsPluginParserOptions,
        ...(tsx
          ? {
              ecmaFeatures: {
                jsx: true,
              },
            }
          : {}),
      },
    },
  }

  return config
}
