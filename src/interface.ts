// FIXME: IDE current not support exports.types
import type { ParserOptions } from '@typescript-eslint/parser/dist'

export type IRules = IRule[]
export type TsPluginParserOptions = ParserOptions

type Matcher = (path: string) => boolean

interface ILanguageOptions {
  ecmaVersion: string
  sourceType: 'module' | 'script'
  parser: string | ((...args: any[]) => any)
  globals: Record<string, boolean>
  parserOptions: ParserOptions
}

export interface IRule {
  files?: Array<string | Matcher>
  ignores?: Array<string | Matcher>
  languageOptions?: Partial<ILanguageOptions>
  plugins?: Record<string, any>
  rules?: Record<string, any>
  settings?: Record<string, any>
}

export interface ICreateConfigOptions {
  /**
   * @typescript-eslint/parser `project` option
   * @example simple:
   *            `./tsconfig.json` -> `${process.cwd()}/tsconfig.json`
   *          monorepo:
   *            [`./tsconfig.json`, `./tsconfig.build.json`] ->
   *            [`${process.cwd()}/tsconfig.json`, `${process.cwd()}/tsconfig.build.json`]
   * @default `${process.cwd()}/tsconfig.json`
   */
  tsconfig?: string | string[]
  /**
   * tsconfigRootDir
   * @example __dirname
   * @default process.cwd()
   */
  root?: string
}
