'use strict';

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  'rules': {
    'quotes': ['error', 'single'],
    
    /**
     * Enforces 2 spaces at the beginning of each line
     */
    'indent': ['error', 2],

    /**
     * Require use of semicolons
     */
    'semi': [1, 'always'],

    /**
     * Warn when a variable is unused
     */
    'no-unused-vars': ['warn'],

    /**
     * Allows to have no parentesis in arrow function parameters
     */
    'arrow-parens': ['warn', 'as-needed'],

    /**
     * Enforce three '=' (===) for equality operations
     */
    'eqeqeq': ['error', 'always'],

    /**
     * Enforces functions for constant returns
     */
    'consistent-return': 'error'
  },
  'env': {
    'es6': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': '2021'
  },
  'extends': 'eslint:recommended'
};

module.exports = config;