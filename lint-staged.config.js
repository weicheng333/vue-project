export default {
  '*.{ts,js,vue,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
    `vue-tsc --noEmit ${stagedFiles.filter(file => !file.endsWith('json') && !file.endsWith('js')).join(' ')}`,
  ],
  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
