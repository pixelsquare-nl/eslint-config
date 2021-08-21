/* eslint-disable prettier/prettier */
'use strict'

const rules = [
  './src/style',
  './src/variables',
  './src/functions'
].map(require.resolve)

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  'env': {
    'es6': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': '2021',
  },
  'rules': {
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  'plugins': ['prettier'],
  'extends': ['eslint:recommended', ...rules],
}

module.exports = config