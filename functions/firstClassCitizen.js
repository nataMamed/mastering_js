// Função em JS é First-Class Object (Citizens)
// Higher-order function
// A função sempre retornará um undefined 
// Parâmetros e retornos são opcionais


// criar de forma literal
function func1(){ }

// armazenar em uma variável
const func2 = function (a, b){ return a + b }

// Armazenar em um array
const array = [function func3(c, d){return c + d}, func1, func2]
console.log(array[0](2, 3));

// Armazenar em um atributo de um objeto
const obj = {
    falar: function(){return 'falando'}
}
console.log(obj.falar());

// Passar a função como parâmetro
function run(fun){
    fun(3, 4)
}
run(func2)

// Uma função pode retornar ou contar uma função
function sum(a, b){
    return function (c){
        console.log(a + b + c);
    }
}
const sum2 = sum(3, 4)
console.log(sum2(5));