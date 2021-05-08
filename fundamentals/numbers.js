let peso1 = 1.0;
let peso2 = Number("2.0"); // Number -> função

console.log(peso1, peso2, typeof Number);
// peso1 e 2 são inteiros pois tem zero após o ponto
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.8;
const avaliacao2 = 6.9;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2), typeof media); // 2 casas de arredondamento
console.log(media.toString()); // em string
