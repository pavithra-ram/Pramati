const names=document.getElementById("name");
const powers=document.getElementById("power");
const st=document.getElementById("st");
const op=document.getElementById("op");           
//using objects

var hero_part=(function()  //making private using closures
{
  var heroes=[];
  return function()
  {
     
      const name=names.value;
      const power=powers.value;
      let hero=new_hero(name,power);
      heroes.push(hero);
      console.log(heroes);
  }
})();

//creating new hero
function new_hero(name,power)
{
  var obj={};
  obj.name=name;
  obj.power=power;
  return obj;
};

//removing existing hero
var remove_hero=(function()
{

  var k;
  var heroes=hero_part();
  console.log("heroes::::"+heroes);
  var rem=prompt("enter hero name");
  for(k=0;k<heroes.length;k++)
  {
    if(rem==heroes[k].name)
    {
      heroes.splice(k,1);
    }
  }
  heroes.length-1;
  return heroes;
  
});
  
   
     
      

