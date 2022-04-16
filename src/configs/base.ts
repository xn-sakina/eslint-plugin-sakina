import '../utils/patch'

export = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
    // unused vars
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    // no console/debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  ignorePatterns: ['/dist', '/build', '/node_modules'],
}
