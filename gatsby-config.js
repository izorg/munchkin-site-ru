module.exports = {
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-11062557-8',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        defaultSizes: 'gzip',
        disable: process.env.STATS !== 'true',
        production: true,
      },
    },
  ],
};
