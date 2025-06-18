export default {
  'src/**/*.{ts,js,vue,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
    `vue-tsc --noEmit`,
  ],
  '/*.{ts,js,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
  ],

  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
