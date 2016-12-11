// factory method for db

exports = module.exports = function(config){
    return {
        select: function(query){
            return {name: 'white shark', injected_config: config}; 
        }
    };
};
