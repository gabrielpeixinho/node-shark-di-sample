
const container = require('./di.js');

container.get(function(err, repository){

    console.log(err);
    console.log(repository.get(0));

});


