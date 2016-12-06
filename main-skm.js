

const di = require('shark-di');
const Module = di.Module;


var main = new Module();

main.bind('db', function(){
    return {
        select: function(query){
            return {name: 'white shark'}; 
        }
    };
});

main.bind('repository', function(db){

     return {
        get: function(id){
           var data = db.select('id =' + id);
           data.id = id;
           return data;
        }
     };
});

exports = module.exports = main;
