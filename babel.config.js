module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { chrome: '55' }, debug: true }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
};
