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
    'react/prop-types': [
      'error',
      {
        ignore: ['classes', 'theme'],
      },
    ],
  },
};
