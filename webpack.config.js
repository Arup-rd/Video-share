const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');
const DST = path.join(__dirname, 'dist');
const STATIC = path.resolve(__dirname, 'static');

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${SRC}/client/app.js`,
  output: {
    path: `${DST}/client`,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: { compact: false }
    }, {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new BaseHrefWebpackPlugin({
      baseHref: '/'
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: STATIC,
    historyApiFallback: true,
    port: 8081
  }
};
