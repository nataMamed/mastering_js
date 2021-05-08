// Usando o destructuring como parâmetro de uma função

// Destructuring - Do objeto passado ele ja realiza o unpacking
function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// Objeto
const obj = {min:10, max:50}
console.log(rand(obj));
console.log(rand({min:5}));
console.log(rand({}));
// console.log(rand()); Erro!!

