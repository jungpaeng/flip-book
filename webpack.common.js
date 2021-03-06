const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src/popup/index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'browserslist',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/**/*', toType: 'template', to: '[name].[ext]' }],
    }),
  ],
};
