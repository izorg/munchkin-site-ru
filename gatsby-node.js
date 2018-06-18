const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
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
