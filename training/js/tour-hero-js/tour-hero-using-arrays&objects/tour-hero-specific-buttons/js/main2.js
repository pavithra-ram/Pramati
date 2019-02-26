const name=document.getElementById("name");
const power=document.getElementById("power");
const submit_btn=document.getElementById("st");
const op=document.getElementById("op");           

var name_arr=[];
var power_arr=[];
var j=0;
var k;
//using arrays

submit_btn.onclick=function()
{
      const key=name.value;
      const value=power.value;
      name_arr[j]=key;
      power_arr[j]=value;
    //  console.log("instant display : ", name_arr[j]);
      j++;
   
      if(key && value)
      {
          localStorage.setItem(key,value);          
          //location.reload();
      }
     
      if(name_arr.length>=1)
      {
      for(k=0;k<name_arr.length;k++)
      {
        console.log("name-arr : "+name_arr[k]+"\t\t"+"power-arr : "+power_arr[k]+"\n");
      }
      }
      if(name_arr.length==5)
      {
      var rem=prompt("enter hero name");
      var temp;
      for(k=0;k<name_arr.length;k++)
      {
        if(rem==name_arr[k])
        {
           temp=k;
           break;
        }
      }
      console.log("removed elements : "+name_arr.splice(temp,1) + "&&" +power_arr.splice(temp,1) );
      j--;
    }
};    

/*
for (let i=0 ; i<localStorage.length ; i++)
{
  const key=localStorage.key(i);
  const value=localStorage.getItem(key); 
  const btn = document.createElement("BUTTON");
  btn.innerText = 'REMOVE';  
  btn.id=i+1;
  //op.innerHTML += i+1 + "\t\t" + key +"\t:\t"+value+"\t\t";  
 // op.appendChild(btn);
  //op.innerHTML +="<br/><br/>";  
}
*/
