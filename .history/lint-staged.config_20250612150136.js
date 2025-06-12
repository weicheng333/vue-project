export default {
  '*.{ts,js,vue}': stagedFiles => [`eslint`],
  '*.{css,vue}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
