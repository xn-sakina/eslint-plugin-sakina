import { createGlobalBaseConfig } from './base'
import type { ICreateConfigOptions, IRule, IRules } from './interface'
import { normalizeOptions } from './options'
import { createTSConfig } from './typescript'

function createRecommendConfig(opts: ICreateConfigOptions = {}) {
  const options = normalizeOptions(opts)
  if (process.env.ESLINT_SAKINA_DEBUG) {
    console.log('options: ', options)
  }

  const globalIgnoreConfig: IRule = {
    ignores: ['**/dist/**', '**/node_modules/**', '**/.git/**'],
  }

  const configs: IRules = [
    globalIgnoreConfig,
    createGlobalBaseConfig(),
    // tsx
    createTSConfig({
      files: ['**/*.tsx'],
      tsPluginParserOptions: options,
      tsx: true,
    }),
    // ts
    createTSConfig({
      files: ['**/*.ts'],
      tsPluginParserOptions: options,
    }),
    // jsx
    {
      files: ['**/*.jsx'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
    // js
    {
      files: ['**/*.js'],
    },
  ]

  return configs
}

export = createRecommendConfig
