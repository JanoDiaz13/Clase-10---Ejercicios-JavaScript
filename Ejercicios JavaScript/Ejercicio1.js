var edad = prompt("Ingrese su edad")

function toDays(ed){
    var años = 365;

    return años * ed
}

console.log("Edad en dias: "+ toDays(edad))