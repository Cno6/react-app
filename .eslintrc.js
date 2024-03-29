module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }],
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'max-len': ['warn', 120, { ignoreComments: true }],
    'react/display-name': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
