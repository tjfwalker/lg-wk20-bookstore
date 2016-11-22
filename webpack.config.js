var path = require("path");
var nodeExternals = require('webpack-node-externals')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  entry: ['./app.js', 'foundation-sites!./foundation-sites.config.js'],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /foundation\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.pug$/, include: [path.resolve(__dirname, 'views/')], loader: 'pug' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};