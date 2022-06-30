module.exports = {
  name: 'shop',
  remotes: ['shell'],
  exposes: {
    './Module': './src/remote-entry',
  },
};
