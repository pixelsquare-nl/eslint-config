/**
 * See if node works correctly
 */
test('Healthcheck', () => expect(1).toBe(Number(true)))

/**
 * Check if files aren't throwing any errors
 */

const requires = () =>
  ['.', './src/functions', './src/variables'].map(require.resolve)

test('No throwing errors', () => expect(requires).not.toThrow())
