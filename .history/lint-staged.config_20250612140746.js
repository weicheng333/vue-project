export default {
  '*.{css,vue}': () => [`pnpm stylelint`],
  '*.{ts,js}': () => [`pnpm eslint`],

  // '*.{css,vue}': () => [`pnpm stylelint`],
}
