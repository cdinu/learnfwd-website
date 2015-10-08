const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

global.compileForServer = false;
global.compileHTML = true;
const config = require('../webpack.config');
const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.contentBase,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(port, '0.0.0.0', function webpackListen(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening on http://localhost:' + port);
});
