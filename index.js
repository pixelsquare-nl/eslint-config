'use strict'

/**
 * Typescript extension; if nessacery
 */
const typescript = {
  extends: 'plugin:@typescript-eslint/recommended',
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
}

/**
 * Default variable and function style guides
 */
const rules = ['./variables', './functions']

/**
 * Typescript and react integration; if nessacery
 */
try {
  if (require.resolve('eslint-plugin-react') && require.resolve('react'))
    rules.push('./react')
  if (
    require.resolve('typescript') &&
    require.resolve('@typescript-eslint/eslint-plugin') &&
    require.resolve('@typescript-eslint/parser')
  ) {
    rules.push(typescript)
  }
  // eslint-disable-next-line no-empty
} catch (err) {}

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2021',
  },
  rules: {
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', ...rules.map(require.resolve)],
}

module.exports = config
