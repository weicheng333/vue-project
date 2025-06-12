// @ts-check

/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-recess-order'], // 继承css 已经配置好的css书写规则
  plugins: ['stylelint-less', 'stylelint-order', 'stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
      // 提取style内部的css 如果安装了postcss-less。可以提取标签上含有less标识的style内部less
      extends: ['stylelint-config-html/html'], // 处理html文件 的css合法 lint规则
    },
    {
      files: ['*.css', '**/*.css'],
      extends: ['stylelint-config-standard'], // css书写的版式校验
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-vue', 'stylelint-config-html/vue'],
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard-less'],
    },
  ],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'use',
        ],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    // Add this rule to allow empty sources in Vue components
    'no-empty-source': null,
  },
}
