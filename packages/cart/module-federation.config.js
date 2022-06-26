module.exports = {
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Test': './src/components/Test.tsx',
  },
};
