'use strict';

const rules = {
  /**
   * Warn when a variable is unused
   */
  'no-unused-vars': ['warn'],

  /**
   * Disallows the use of 'var', use 'let' instead
   */
  'no-var': ['error'],

  /**
   * Enforces const variables when there is need for
   */
  'prefer-const': ['error']
};

module.exports = { rules };