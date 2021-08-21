'use strict';

const rules = [
  './src/style',
  './src/variables',
  './src/functions'
].map(require.resolve);

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  'env': {
    'es6': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': '2021'
  },
  'extends': ['eslint:recommended', ...rules]
};

module.exports = config;