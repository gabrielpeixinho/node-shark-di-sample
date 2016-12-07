// factory method for db
exports = module.exports = function(){
    return {
        select: function(query){
            return {name: 'white shark'}; 
        }
    };
};
