// Trabalhando com objetos
// a é um endereço que aponta para o valor {name : "natã"}
const a = {name : "natã"}
const b = a
// b recebe o mesmo endereço que a, logo se modificar b modifica a
// Isso chama-se atribuição por referência
b.name = "george"
console.log(a, b);

// Com tipos primitivos haverá a cópia por valor
// Ou seja, apenas o valor será levado
let c = 3
let d = c
d++
console.log(c, d);

// Null and Undefined
// Undefined significa que ela não foi inicializada, mas foi declarada
let valor // undefined
console.log(valor);
// Null - não possui nenhum valor e não tem nenhum endereço de memória
// Faz sentido trabalhando com valores referencia, quando vc quer quer a variavel não aponte mais nd
// Zera a variável referencia
valor = null 
console.log(valor);
// console.log(valor.toString()); Erro!
const prod = {}
console.log(prod.preco);
prod.preco  = 40.0
console.log(prod.preco);
prod.preco = null // desreferenciando a proco do valor setado