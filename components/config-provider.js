// factory method for config

const RSVP = require('RSVP');
const Promise = RSVP.Promise;
const http = require('http');


exports = module.exports = function(){
    return new Promise(function(resolve, reject){
    
       var options = {
          host: 'www.google.com',
          path: '/'
       };

       var req = http.request(options, function(res){

            res.on('data', function(){
      
               var mockedConfig = {
                   endPoint: 'myrepository.com',
                   port: '8080'
               };

               resolve(mockedConfig);
            
            });
       
       }); 

       req.end();
         
    });
};
