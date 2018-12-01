module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['json'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['classes', 'theme'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      env: {
        browser: true,
      },
    },
    {
      files: ['gatsby-ssr.js', 'scripts/**/*.js'],
      env: {
        node: true,
      },
      rules: {
        'compat/compat': 'off',
        'no-console': 'off',
      },
    },
  ],
};
