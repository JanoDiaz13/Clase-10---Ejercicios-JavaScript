var horas = prompt("Ingrese la hora")

function toSeconds(hor){
    var seg = 3600
    
    return seg * hor

}


console.log("Hora en segundos: "+toSeconds(horas))