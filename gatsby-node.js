const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
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
