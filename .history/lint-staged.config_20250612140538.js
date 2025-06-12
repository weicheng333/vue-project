export default {
  '*.{ts,js}': () => [`npx eslint`],
  '*.{css,vue}': () => [`pnpm stylelint`],
}
