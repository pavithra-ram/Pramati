const names=document.getElementById("name");
const powers=document.getElementById("power");
const st=document.getElementById("st");
const op=document.getElementById("op");           
//using objects
var dummy=(function(temp){
  
  var heroes=[];
  this.temp=temp;
  if(temp==1)
  {
     return hero_part(heroes);
  }
  else if(temp==2)
  {
    return remove_hero(heroes); 
  }

})();
  var hero_part=(function()  //making private using closures
  {
  
    return function()
    {
        const name=names.value;
        const power=powers.value;
        let hero=new_hero(name,power);
        heroes.push(hero);
        console.log(heroes);
    }

  }
  //creating new hero
   function new_hero(name,power)
  {
    var obj={};
    obj.name=name;
    obj.power=power;
    return obj;
  }
  
  //removing existing hero
function remove_hero(heroes)
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
  }


  
   
     
      

