module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['json'],
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/no-unescaped-entities': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/prop-types': [
      'error',
      {
        ignore: ['classes', 'theme'],
      },
    ],
    'react/sort-prop-types': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
  overrides: [
    {
      files: ['gatsby-config.js', 'gatsby-ssr.js', 'scripts/**/*.js'],
      env: {
        browser: false,
        node: true,
      },
      rules: {
        'compat/compat': 'off',
        'no-console': 'off',
      },
    },
  ],
};
