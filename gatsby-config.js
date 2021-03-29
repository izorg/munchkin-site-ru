module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11062557-8",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-theme-i18n",
      options: {
        defaultLang: "en",
        locales: "en ru",
        configPath: require.resolve("./i18n/config.json"),
      },
    },
    {
      resolve: "gatsby-theme-i18n-react-intl",
      options: {
        defaultLocale: "./i18n/react-intl/en.json",
      },
    },
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        webFontsConfig: false,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        defaultSizes: "gzip",
      },
    },
  ],
  siteMetadata: {
    siteUrl: "https://allmunchkins.com",
  },
};
