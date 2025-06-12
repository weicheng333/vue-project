export default {
  '*.{ts,js}': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
