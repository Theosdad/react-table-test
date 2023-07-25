/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    publicPath: '/',
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(.png|.svg|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      directory: path.join(path.dirname(__dirname), 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(path.dirname(__dirname), 'public'),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
