export default {
  '*.{ts,js,vue}': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue,;ess}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
