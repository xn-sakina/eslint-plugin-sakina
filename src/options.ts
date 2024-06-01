import { ICreateConfigOptions, TsPluginParserOptions } from './interface'

export const normalizeOptions = (opts: ICreateConfigOptions = {}) => {
  const cwd = process.cwd()
  // final config
  const tseslintConfig: TsPluginParserOptions = {}

  // root
  if (opts.root?.length) {
    tseslintConfig.tsconfigRootDir = opts.root
  } else {
    tseslintConfig.tsconfigRootDir = cwd
  }

  // tsconfig
  const usingProject = opts.tsconfig !== undefined
  const usingProjectService = opts.projectService !== undefined
  if (usingProjectService) {
    tseslintConfig.projectService = opts.projectService
  } else if (usingProject) {
    if (opts.tsconfig === true) {
      tseslintConfig.project = true
    } else {
      tseslintConfig.project = opts.tsconfig
    }
  } else {
    // default use project sevice
    tseslintConfig.projectService = true
  }

  return tseslintConfig
}
