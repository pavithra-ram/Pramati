const op = document.getElementById("op");
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var doc, bod, htm, C, E, buttonMaker;

doc = document; bod = doc.body; htm = doc.documentElement;
C = function(tag){
return doc.createElement(tag);
}
E = function(id){
return doc.getElementById(id);
}

buttonMaker = function(appendTo){


  b = C('input'); b.type = 'button'; b.value = i;
  
  

return b;
}


for (let i = localStorage.length - 1; i >= 0; i--) 
{
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    const btn =buttonMaker(E('buttons'));
    

    btn.style.backgroundColor = "#0069D9";
    btn.style.border = "#0069D9";
    btn.style.color = "white";
    btn.style.fontSize = "15px";
    btn.style.fontWeight="900";
    btn.style.fontFamily = "Roboto";
    btn.style.padding="10px";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = i + 1;

    cell2.innerHTML = key.toUpperCase();

    cell3.innerHTML = value.toUpperCase();

    cell4.append(btn);

 
}



