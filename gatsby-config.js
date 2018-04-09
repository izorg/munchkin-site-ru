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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
  ],
};
