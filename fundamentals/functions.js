// O Presidente do país javascript é a função
console.log(typeof Object);

class Produto {}
console.log(typeof Produto);

// função que não retorna nd

function printSum(a, b){
    console.log(a + b);
}

// Possibilidades de chamada
printSum(210, 30)
printSum(2)
printSum(3, 4, 5, 6)
printSum()

// Função com retorno
function sum(a = -1, b = 0){
    return a + b
}

// Possibilidades de chamada
console.log(sum(3, 5));
console.log(sum(3));
console.log(sum());

// Passando uma função para uma variável
// Função anônima 
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(4, 5)

// Arrow function 
const soma = (a, b) => {
    return a + b
}
console.log(soma(6, 7))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(9, 2));