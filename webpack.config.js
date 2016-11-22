const path = require("path");
const nodeExternals = require('webpack-node-externals')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './app.js',
    style: ['./public/stylesheets/style.sass']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js',
    chunkFilename: '[name].css'
  },
  module: {
    loaders: [
      { test: /\.pug$/, include: [path.resolve(__dirname, 'views/')], loader: 'pug' },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('css!sass') },
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
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ],
  target: 'node',
  externals: [nodeExternals()]
};