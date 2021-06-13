"use strict"
function max2() {
    var a = Number(document.getElementById("pirmas-skaicius").value);
    var b = Number(document.getElementById("antras-skaicius").value);
    if (a > b) {
        document.getElementById("rez1").value = ("Atsakymas: " + a);
    }
    if (b > a) {
        document.getElementById("rez1").value = ("Atsakymas: " + b);
    }
}