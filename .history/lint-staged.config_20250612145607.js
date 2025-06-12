export default {
  '*.{ts,js,vue}': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
