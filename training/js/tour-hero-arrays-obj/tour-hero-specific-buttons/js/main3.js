const names = document.getElementById("name");
const powers = document.getElementById("power");
//const st=document.getElementById("st");
//const op=document.getElementById("op");           
//using objects

var Module = (function () {
  var heroes = [];
  var _heropart = function () {
    // private stuff
    const name = names.value;
    const power = powers.value;
    let hero = new_hero(name, power);
    heroes.push(hero);
    console.log(heroes);
    return heroes;
  };

  //removing existing hero
  var _removepart = function () {

    var k;
    //var heroes=hero_part();
    console.log("heroes::::" + heroes);
    var rem = prompt("enter hero name");
    for (k = 0; k < heroes.length; k++) {
      if (rem == heroes[k].name) {
        heroes.splice(k, 1);
      }
    }
    heroes.length - 1;
    return heroes;

  };


  var publicMethod1 = function () {
    _heropart();
  };

  var publicMethod2 = function () {
    _removepart();
  };

  //creating new hero
  function new_hero(name, power) {
    var obj = {};
    obj.name = name;
    obj.power = power;
    return obj;
  };

  return {
    publicMethod1: publicMethod1,
    publicMethod2: publicMethod2
  };

})();

























