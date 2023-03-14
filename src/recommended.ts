import { createBaseConfig } from './base'
import type { ICreateConfigOptions, IRules } from './interface'
import { normalizeOptions } from './options'

function createRecommendConfig(opts: ICreateConfigOptions = {}) {
  const options = normalizeOptions(opts)

  const config: IRules = [
    createBaseConfig({
      files: ['**/*.js', '**/*.jsx'],
    }),
    // FIXME: currently `@typescript-eslint` not support `.tsx` file when using flat config
    createBaseConfig({
      files: ['**/*.tsx'],
    }),
    createBaseConfig({
      files: ['**/*.ts'],
      tsPluginParserOpts: options,
    }),
  ]

  return config
}

export = createRecommendConfig
