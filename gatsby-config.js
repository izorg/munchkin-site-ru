module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-11062557-8',
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     // analyzerPort: 3000,
    //     defaultSizes: 'gzip',
    //     production: true,
    //   },
    // },
  ],
};
