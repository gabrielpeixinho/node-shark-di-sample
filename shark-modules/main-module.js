const Module = require('shark-di').Module;

var main = new Module();

// binds between parameter-names and factory methods.
// container will resolve parameters of factory methods using this bindings.

main.bind('db', require('../components/db.js'));
main.bind('repository', require('../components/repository.js'));

exports = module.exports = main;
