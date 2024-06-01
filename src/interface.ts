import type { ParserOptions } from '@typescript-eslint/types/dist'

type ProjectService = Record<string, any> | true

type ParserOptionsWithoutProjectService = Omit<ParserOptions, 'projectService'>

export type IRules = IRule[]
export type TsPluginParserOptions = ParserOptionsWithoutProjectService & {
  projectService?: ProjectService
}

type Matcher = (path: string) => boolean

interface ILanguageOptions {
  ecmaVersion: string
  sourceType: 'module' | 'script'
  parser: string | ((...args: any[]) => any)
  globals: Record<string, boolean>
  parserOptions: TsPluginParserOptions
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
  tsconfig?: string | string[] | true
  /**
   * typescript-eslint v8 `projectService` option
   * @see https://typescript-eslint.io/blog/announcing-typescript-eslint-v8-beta/
   */
  projectService?: ProjectService
  /**
   * tsconfigRootDir
   * @example __dirname
   * @default process.cwd()
   */
  root?: string
}
