var str = "asdbasb";

function lastCaracter(string, element = "b") {

    return str.charAt(string.length -1) == element;
}

console.log(lastCaracter(str));