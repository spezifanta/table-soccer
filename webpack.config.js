const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
      APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: ['node_modules'],
        loaders: ['babel']
      }
    ]
  },
  plugins: [
  ],
  devServer: {
    hot: true,
    contentBase: '.'
  }
};
