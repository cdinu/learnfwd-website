if (global.DEBUG) {
  console.log('Starting in develpment mode.');
  require('./dev');
} else {
  console.log('Production environment detected.');
  require('newrelic');
  require('./prod');
}
