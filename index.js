
const Container = require('shark-di').Container;
const mainModule = require('./main-skm.js');


var container = new Container();

container.load([mainModule]);

container.get(function(repository){

    console.log(repository.get(0));

});


