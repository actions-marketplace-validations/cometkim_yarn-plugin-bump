module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 10,
      },
      useBuiltIns: 'usage',
      shippedProposals: true,
      corejs: 3,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
