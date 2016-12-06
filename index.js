
const container = require('./di.js');

container.get(function(repository){

    console.log(repository.get(0));

});


