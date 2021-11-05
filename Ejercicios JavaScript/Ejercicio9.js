var str = "123456789"

function tomarStr(string){
    var string1 = string.slice(0, 3);
    var string2 = string.slice(-3);

    newStr = string1.concat(string2);

    if (newStr.length >=6 ){
        console.log("Tiene 6 espacios")
        return newStr;
    }
    else{
        console.log("Tiene menos de 6 espacios")
    }
    
}

console.log(tomarStr(str))

