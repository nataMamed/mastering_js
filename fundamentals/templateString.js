const nome = "Natã";
const concatenacao = "Olá " + nome + " Bem vindo!!";
const template = `Olá ${nome}. Bem vindo`;

console.log(concatenacao, template);

// Expressões podem ser utilizadas também...
console.log(`A soma de 1 + 1 é ${1 + 1} !`);

const up = texto =>  texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}`);