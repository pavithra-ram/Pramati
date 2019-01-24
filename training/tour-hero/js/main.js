const name=document.getElementById("name");
const power=document.getElementById("power");
const st=document.getElementById("st");
const op=document.getElementById("op");           
st.onclick=function()
{
      const key=name.value;
      const value=power.value;
      if(key && value)
      {
          localStorage.setItem(key,value);
          
          location.reload();
      }
};    

for (let i=0 ; i<localStorage.length ; i++)
{
  const key=localStorage.key(i);
  const value=localStorage.getItem(key);
  
  op.innerHTML += i+1 + "\t\t" + key +"\t:\t"+value+"<br />";
}