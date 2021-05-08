// Podemos declarar variáveis com  let e var
// Procurar sempre declarar com let
var var1 = 3;
let var2 = 4;

console.log(var1, var2);

// Não é possível fazer: let var2 = 4
var var1 = 4;
var2 = 5;
console.log(var1, var2);

// Essa constante não poderá ser modificada
const const1 = 40;
console.log(const1);
