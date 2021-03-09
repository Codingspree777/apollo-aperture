const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './electron/src/renderer/index.js',
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
    contentBase: path.join(__dirname, './electron/src/renderer')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'react', 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'electron-renderer'
};