
st.onclick = function () 
{

    let n = document.getElementById("name");
    let p = document.getElementById("power");
    let name = n.value;
    let power = p.value;
    
    if(name && power)
    {
    localStorage.setItem(name, power);
    location.reload();
    }
    

}
