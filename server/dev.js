const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

global.compileForServer = false;
const config = require('../webpack.config');
const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
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
