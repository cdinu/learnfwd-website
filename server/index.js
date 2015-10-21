
if (global.DEBUG) {
  require('./dev');
} else {
  require('newrelic');
  require('./prod');
}
