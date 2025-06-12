export default {
  '*.{ts,js,vue}': stagedFiles => [`eslint --fix "${stagedFiles.join(' ')}"`, `eslint "${stagedFiles.join(' ')}"`],
  '*.{css,vue}': stagedFiles => [`stylelint --fix ${stagedFiles.join(' ')}`, `stylelint ${stagedFiles.join(' ')}`],
}
