export default {
  '*.{ts,js}': stagedFiles => [`eslint --fix ${stagedFiles.join(' ')} && eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue}': stagedFiles => [`stylelint --fix ${stagedFiles.join(' ')} && stylelint ${stagedFiles.join(' ')}`],
}
