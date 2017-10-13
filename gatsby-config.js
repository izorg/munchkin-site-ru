module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-11062557-8',
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: 'src/styles/munchkinTheme.js',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
  ],
};
