import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: {
    overrides: {
      'ts/no-empty-object-type': 'off',
      'unicorn/prefer-node-protocol': 'off',
    },
  },
  javascript: true,
  formatters: {
    css: true,
    html: true,
  },

}, {
  rules: {
    'no-console': 'off',
  },
})
