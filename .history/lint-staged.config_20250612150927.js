export default {
  '*.{ts,js,vue}': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
