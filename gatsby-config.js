module.exports = {
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5Z3D8FX",
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
