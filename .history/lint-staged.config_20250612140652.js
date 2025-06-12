export default {
  '*.{ts,js}': () => [`eslint`],
  '*.{css,vue}': () => [`pnpm stylelint`],
}
