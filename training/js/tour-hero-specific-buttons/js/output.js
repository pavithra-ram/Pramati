const op = document.getElementById("op");
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);


for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const btn = document.createElement("BUTTON");
    btn.innerText = 'REMOVE';
    btn.value = i + 1;
    btn.style.backgroundColor = "#0069D9";
    btn.style.border = "#0069D9";
    btn.style.color = "white";
    btn.style.fontSize = "15px";
    btn.style.fontWeight = "900";
    btn.style.fontFamily = "Roboto";
    btn.style.padding = "10px";
    btn.id = i;
    btn.addEventListener("click", function () {

        var id = btn.id;
        //console.log('id', id)
        var hero = localStorage.key(id);
        localStorage.removeItem(hero);
        // console.log('local storage', localStorage, hero)
        location.reload();

    });
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = i + 1;

    cell2.innerHTML = key.toUpperCase();

    cell3.innerHTML = value.toUpperCase();

    cell4.append(btn);
}
