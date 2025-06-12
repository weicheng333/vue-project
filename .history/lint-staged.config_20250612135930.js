export default {
  '*.{ts,js}': () => [`eslint`],
  '*.{css,vue}': () => [`stylelint  --fix \"**/*.{vue,css,less,html}\"`],
}
