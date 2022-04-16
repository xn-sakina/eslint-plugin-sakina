import { existsSync, writeFileSync } from 'fs'
import { join } from 'path'
import chalk from 'chalk'
import { PRETTIER_CONFIG } from './templates/prettier'
import { ESLINT_CONFIG } from './templates/eslint'
import { program } from 'commander'

const pkgPath = join(__dirname, '../package.json')
const pkg = require(pkgPath)

const init = async () => {
  const cwd = process.cwd()

  // generate prettier config file
  const prettierConfigPath = join(cwd, './.prettierrc')
  if (!existsSync(prettierConfigPath)) {
    writeFileSync(prettierConfigPath, jsonStringify(PRETTIER_CONFIG), {
      encoding: 'utf-8',
    })
    console.log(chalk.green(`Generate .prettierrc success.`))
  } else {
    console.log(chalk.yellow(`Prettier config file existed.`))
  }

  // generate eslint config file
  const eslintConfigPath = join(cwd, './.eslintrc.js')
  if (!existsSync(eslintConfigPath)) {
    writeFileSync(eslintConfigPath, ESLINT_CONFIG, {
      encoding: 'utf-8',
    })
    console.log(chalk.green(`Generate .eslintrc.js success.`))
  } else {
    console.log(chalk.yellow(`Eslint config file existed.`))
  }

  console.log(chalk.blue(`Sakina lint initialled`))
}

const run = async () => {
  program
    .command('init')
    .description('Generate eslint and prettier config file')
    .action(async () => {
      init()
    })

  program.version(pkg.version)
  program.parse(process.argv)
}

function jsonStringify(obj: Record<string, any>) {
  return `${JSON.stringify(obj, null, 2)}\n`
}

export { run }
