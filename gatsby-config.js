module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-11062557-8',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3001,
        defaultSizes: 'gzip',
        production: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
  ],
};
