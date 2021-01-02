module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 999 }],
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-useless-catch': 'off',
    'eslint-disable-next-line': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'config',
        'state',
      ],
    }],
  },
};
