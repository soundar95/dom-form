
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var n =1;
var x =1;
function addlist(){
    var addrow = document.getElementById("show");
    var newrow = addrow.insertRow(n);
    list1[x] = document.getElementById("first-name").value;
    list2[x] = document.getElementById("last-name").value;
    list3[x] = document.getElementById("address").value;
    list4[x] = document.getElementById("pincode").value;
    list5[x] = document.querySelector('input[name="gender"]:checked').value;
  console.log( list5[x]);
    list6[x] = document.getElementById("food").value;
    list7[x] = document.getElementById("state").value;
    list8[x] = document.getElementById("country").value;

    var cell1 = newrow.insertCell(0);
    cell1.innerHTML = list1[x];
    var cell2 = newrow.insertCell(1);
    cell2.innerHTML = list2[x];
    var cell3 = newrow.insertCell(2);
    cell3.innerHTML = list3[x];
    var cell4 = newrow.insertCell(3);
    cell4.innerHTML = list4[x];
    var cell5 = newrow.insertCell(4);
    cell5.innerHTML = list5[x];
    var cell6 = newrow.insertCell(5);
    cell6.innerHTML = list6[x];
    var cell7 = newrow.insertCell(6);
    cell7.innerHTML = list7[x];
    var cell8 = newrow.insertCell(7);
    cell8.innerHTML = list8[x];

}