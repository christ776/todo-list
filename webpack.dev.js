const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
