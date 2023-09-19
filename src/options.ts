import { join } from 'path'
import { ICreateConfigOptions, TsPluginParserOptions } from './interface'
import { existsSync } from 'fs'

export const normalizeOptions = (opts: ICreateConfigOptions = {}) => {
  const cwd = process.cwd()
  let root: ICreateConfigOptions['root']
  let tsconfig: ICreateConfigOptions['tsconfig'] | true

  // root
  if (opts.root?.length) {
    root = opts.root
  } else {
    root = cwd
  }

  // tsconfig
  if (opts.tsconfig === true) {
    tsconfig = true
  } else if (opts.tsconfig?.length) {
    tsconfig = opts.tsconfig
  } else {
    // detect root tsconfig.json
    const rootTsconfigPath = join(cwd, 'tsconfig.json')
    if (existsSync(rootTsconfigPath)) {
      tsconfig = rootTsconfigPath
    } else {
      tsconfig = true
    }
  }

  // root
  return {
    project: tsconfig,
    tsconfigRootDir: root,
  } as TsPluginParserOptions
}
