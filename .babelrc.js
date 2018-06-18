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
    // '@babel/plugin-transform-modules-commonjs',
  ],
  env: {
    development: {
      plugins: [
        ['react-intl', { messagesDir: './messages/' }],
      ],
    },
    // development: {
    //   plugins: [
    //     'react-hot-loader/babel',
    //   ],
    // },
    // production: {
    //   plugins: [
    //     '@babel/plugin-transform-react-constant-elements',
    //     '@babel/plugin-transform-react-inline-elements',
    //     ['@babel/plugin-transform-runtime', { polyfill: false }],
    //     ['react-remove-properties', { properties: ['data-screenshots'] }],
    //     'transform-react-remove-prop-types',
    //   ],
    // },
    // test: {
    //   plugins: [
    //     'dynamic-import-node',
    //   ],
    // },
  },
};
