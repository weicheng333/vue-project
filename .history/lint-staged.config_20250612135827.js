export default {
  '*.{ts,js}': () => [`eslint`],
  '*.{css,vue}': () => [`stylelint \"**/*.{vue,css,less,html}\"`],
}
