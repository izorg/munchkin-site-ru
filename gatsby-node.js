const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.onCreateBabelConfig = ({ actions, stage }) => {
  if (stage === 'develop') {
    actions.setBabelPlugin({
      name: 'babel-plugin-react-intl',
      options: { messagesDir: './messages/' },
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, stage, store }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    const { webpack } = store.getState();
    const presetEnvOptions =
      webpack.module.rules[0].use[0].options.presets[0][1];

    Object.assign(presetEnvOptions, {
      // debug: true,
      useBuiltIns: 'entry',
      targets: {
        android: '4.4',
        chrome: 49,
        edge: 14,
        firefox: 45,
        ie: 11,
        safari: 10,
      },
    });

    if (stage === 'build-javascript') {
      webpack.entry.app = ['./src/polyfill.js', webpack.entry.app];
    }

    if (stage === 'develop') {
      webpack.entry.commons.unshift('@babel/polyfill');
    }

    actions.replaceWebpackConfig(webpack);
  }

  if (process.env.STATS && stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerPort: 3001,
          defaultSizes: 'gzip',
        }),
      ],
    });
  }
};
