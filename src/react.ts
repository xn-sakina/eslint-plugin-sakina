import { base } from './base'

const reactHooks = require.resolve('eslint-plugin-react-hooks')
const reactHooksPlugin = require(reactHooks)

base[0]!.languageOptions!.parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
}

base[0]!.rules = {
  ...base[0].rules,
  'react-hooks/rules-of-hooks': 'warn',
  'react-hooks/exhaustive-deps': 'warn',
}

base[0].plugins!['react-hooks'] = reactHooksPlugin

export = base
