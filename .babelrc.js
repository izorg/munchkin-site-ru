module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        /*
         * Have to use `entry` instead of `usage` cause of
         * Android 4.4 support
         */
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    development: {
      plugins: [
        ['react-intl', { messagesDir: './messages/' }],
      ],
    },
  },
};
