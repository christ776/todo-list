const path = require('path');
const mergeWith = require('lodash.mergewith');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// deep merge webpack configs
const merge = (a, b) => mergeWith(a, b, (x, y) => Array.isArray(x) && Array.isArray(y) ? [...x, ...y].filter(v => v) : undefined);

const defaults = {
  entry: path.join(__dirname, "/src/index.jsx"),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

module.exports = (env) => {
  const envConfig = require(`./webpack.${env}.js`);
  return merge(defaults, envConfig);
};