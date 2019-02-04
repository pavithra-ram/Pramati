const name=document.getElementById("name");
const power=document.getElementById("power");
const st=document.getElementById("st");
const op=document.getElementById("op");           
const opbt=document.getElementById("opbt");

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

const id_arr=new Array();
const name_arr=new Array();
const power_arr=new Array();


for (let i=0 ; i<localStorage.length ; i++)
{
  const key=localStorage.key(i);
  const value=localStorage.getItem(key); 
  const btn = document.createElement("BUTTON");
  btn.innerText = 'REMOVE';  
  op.innerHTML += i+1 + "\t\t" + key +"\t:\t"+value+"\t\t";
  op.appendChild(btn);
  op.innerHTML +="<br/><br/>"
  btn.onclick=console.log("hai");
}



