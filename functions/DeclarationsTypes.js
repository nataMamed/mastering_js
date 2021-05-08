console.log(sum(4, 5));
// function declaration 
// A vantagem é que ela pode ser usada antes de ser declarada
function sum(a, b){
    return a + b
}
// function expression
//  não pode ser usada antes de ser declarada
const subtraction = function (a, b){
    return a - b
}
console.log(subtraction(5, 6));
// namde function expressim
// não pode ser usada antes de ser declarada
// sua vantagem é que ela facilita no stack trace
const multiplication = function mult(a, b){
    return a * b
}
console.log(6, 7);