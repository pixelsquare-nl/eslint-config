/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:react/recommended', 'react-app'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
}
