module.exports = {
  name: 'cart',
  remotes: ['shell'],
  exposes: {
    './Module': './src/remote-entry',
    './Test': './src/components/Test',
  },
};
