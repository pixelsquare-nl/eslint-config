/* eslint-disable prettier/prettier */
'use strict'

const rules = [
  './variables',
  './functions'
]

try {
  if (require.resolve('eslint-plugin-react') && require.resolve('react')) {
    rules.push('./react');
  }
// eslint-disable-next-line no-empty
} catch (err) {}

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
  'extends': ['eslint:recommended', ...rules.map(require.resolve)],
}

module.exports = config