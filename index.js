const container = require('shark-di').BootstrapContainer;

// weapon factory
function sword(){
    return {name: 'sword', damage: 2.5};
}

// weapon factory 2
function shuriken(){
    return {name: 'shuriken',  damage: 1.0};
}

// warrior constructor
function ninja(weapon) {
   this.weapon = weapon;
   this.attack = function(){
         console.log('attack using ' + this.weapon.name + ': ' + this.weapon.damage + ' damage');
   } 
}

container.bind('weapon', sword); //TODO: change to shuriken and see what happens.
container.bindClass('warrior', ninja);

container.get(function(err, warrior){

    if(err)
      console.log(err);
    else
      warrior.attack();

});


