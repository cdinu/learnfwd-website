const HTMLWebpack = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const debug = (process.env.NODE_ENV !== 'production');
const server = (global.compileForServer === undefined) ? (!!process.env.SERVER) : global.compileForServer;
const compileHTML = (global.compileHTML === undefined) ? (server || process.env.COMPILE_HTML) : global.compileHTML;

const nodeModules = {};
if (server) {
  const fs = require('fs');

  nodeModules.fs = 'commonjs fs';

  fs.readdirSync('node_modules')
    .filter(mod => ['.bin'].indexOf(mod) === -1)
    .forEach(mod => {
      nodeModules[mod] = 'commonjs ' + mod;
    });
}

function styleLoader(loader) {
  loader = loader ? '!' + loader : '';
  if (server) { return 'css-loader/locals' + loader; }
  if (debug) { return 'style-loader!css-loader?sourceMap' + loader; }
  return ExtractText.extract('style-loader', 'css-loader?sourceMap' + loader);
}

const config = module.exports = {
  entry: {
    index: server ? './server' : './client',
  },
  output: {
    path: path.resolve(server ? 'server-dist' : 'dist'),
    filename: '[name].js',
  },
  externals: nodeModules,
  devtool: debug ? '#source-map' : null,
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.jsx?$/, loader: (debug ? 'react-hot-loader!' : '') + 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: styleLoader('sass') },
      { test: /\.sass$/, loader: styleLoader('sass?indentedSyntax=true') },
      { test: /\.css$/, loader: styleLoader() },
      { test: /\.(png|jpg|woff2?|ttf|eot|svg)(\?|$)/, loader: 'file' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  babel: {
    stage: 0,
    optional: ['runtime'],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: debug,
      SERVER: server,
      'global.DEBUG': debug,
      'global.SERVER': server,
    }),
  ],
};

if (!server) {
  config.plugins.push(
    new ExtractText('bundle.css', { disable: debug || server, allChunks: true })
  );
}

if (server) {
  config.node = {
    process: false,
    console: false,
    Buffer: false,
  };
}

if (!server && debug) {
  config.entry.index = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    config.entry.index,
  ];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (compileHTML) {
  config.plugins.push(
    new HTMLWebpack({
      inject: true,
      template: 'index.html',
    })
  );
}
