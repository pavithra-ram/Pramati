

const op = document.getElementById("op");
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);


for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

  

    cell1.innerHTML = i + 1;

    cell2.innerHTML = key.toUpperCase();

    cell3.innerHTML = value.toUpperCase();


}



rh.onclick = function () 
{

    var hero = prompt("enter hero name!!");
    localStorage.removeItem(hero);
    location.reload();
   /* location.replace("url");*/
 

}