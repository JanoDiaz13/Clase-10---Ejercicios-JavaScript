var str1 = "1234"
var str2 = "abcd"

function dosStrings(string1, string2){
    var s1= string1.slice(2)
    var s2= string2.slice(2)
    var newStr = s1 + s2
    return newStr

}

console.log(dosStrings(str1,str2))