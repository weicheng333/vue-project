export default {
  '*.{css,vue}': 'stylelint',
  '*.{ts,js}': () => [`pnpm eslint`],
  // '*.{css,vue}': () => [`pnpm stylelint`],
}
