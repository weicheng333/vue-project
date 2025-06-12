export default {
  'src/**/*.{ts,js,vue,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
    `pnpm type-check`,
  ],
  '/*.{ts,js,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
    `pnpm type-check`,
  ],
  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
