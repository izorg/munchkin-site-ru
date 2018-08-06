const prettier = require('./.prettierrc');

module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'prettier/prettier': ['error', prettier],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: ['classes', 'theme'],
      },
    ],
  },
};
