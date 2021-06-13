"use strict"
function func() {
    var a = Number(document.getElementById("1num").value);
    var b = Number(document.getElementById("2num").value);
    var c = Number(document.getElementById("3num").value);
    if ( a + b > c && a + c > b  && b + c > a){
    document.getElementById("rez").value = ("Taip")
}
    else {
        document.getElementById("rez").value = ("Ne")
    }
}
