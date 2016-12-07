
const Container = require('shark-di').Container;
const mainModule = require('./shark-modules/main-module.js');

// we recommend one container per application
var container = new Container();

// loading module (binds) into container
container.load([mainModule]);

exports = module.exports = container;
