var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: './server/index',
  target: 'node',
  devtool: 'cheap-eval-source-map',
  externals: nodeModules,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    // new webpack.NormalModuleReplacementPlugin(/\.css$/, 'noop')
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
