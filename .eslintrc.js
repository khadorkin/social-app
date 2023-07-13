module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/ios',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'detox'],
  ignorePatterns: [
    '**/__mocks__/*.ts',
    'rc/third-party',
    'ios',
    'android',
    'coverage',
    '*.lock',
    '.husky',
  ],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.ts', '*.tsx'],
      rules: {
        semi: [2, 'never'],
      },
    },
  ],
}
