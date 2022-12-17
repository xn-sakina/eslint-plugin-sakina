import type { ParserOptions } from '@typescript-eslint/parser'

export interface IRules extends Array<IRule> {}

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
  settings?: Record<string, any>
}
