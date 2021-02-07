const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    watchContentBase: true,
    inline: true,
    open: true,
  },
};
module.exports = merge(common, config);