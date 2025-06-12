export default {
  '*.{ts,js,vue,json}': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
