const rules = {
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
  'consistent-return': 'error',
};


module.exports = { rules };