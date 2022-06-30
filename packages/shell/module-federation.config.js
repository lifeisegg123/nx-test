module.exports = {
  name: 'shell',
  remotes: ['shop', 'cart'],
  exposes: {
    './queryClient': './src/queryClient',
    './atoms': './src/atoms',
  },
};
