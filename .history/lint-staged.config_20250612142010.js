export default {
  '*.js': stagedFiles => [`eslint ${stagedFiles.join(' ')}`],
}
