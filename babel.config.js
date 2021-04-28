module.exports = {
  plugins: ["@emotion/babel-plugin"],
  presets: [
    [
      "babel-preset-gatsby",
      {
        reactRuntime: "automatic",
        reactImportSource: "@emotion/react",
      },
    ],
  ],
};
