
const container = require('./di.js');

// requesting repository to container
//
//

container.get(function(err, repository){

    console.log(err);
    console.log(repository.get(0));

});


