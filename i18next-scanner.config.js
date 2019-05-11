module.exports = {
  input: 'src/**/*.{js,jsx}',
  options: {
    defaultLng: 'en',
    defaultNs: 'translation',
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    keySeparator: false,
    resource: {
      savePath: 'languages/{{lng}}.json',
    },
    sort: true,
  },
};
