// factory method repository
// db will be injected by shark-di container
exports = module.exports = function(db){

     return {
        get: function(id){
           var data = db.select('id =' + id);
           data.id = id;
           return data;
        }
     };
};
