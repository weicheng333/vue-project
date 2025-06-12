export default {
  '*.{ts,js}': () => [`pnpm eslint`],
  '*.{css,vue}': () => [`pnpm stylelint`],
}
