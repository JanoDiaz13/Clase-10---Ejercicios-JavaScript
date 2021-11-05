var numero1 = 35
var numero2 = 101

function Cercanoa100(num1, num2) {
    const n1 = num1 > 100 ? num1 - 100 : 100 - num1
    const n2 = num2 > 100 ? num2 - 100 : 100 - num2
    return n1 > n2 ? num2 : num1


}

console.log(Cercanoa100(numero1, numero2))