module.exports = {
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry',
    './Test': './src/components/Test',
  },
};
