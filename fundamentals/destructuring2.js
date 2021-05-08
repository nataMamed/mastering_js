// Fazendo desructuring em arrays
// Usa a sintaxe dos colchetes
// Aqui no array o destructuring é por posição
// Funciona parecido com um unpacking no Python
const [a] = [90];
console.log(a);

const [n1, , n2, n3, , n5 = 0] = [1, 2, 3, 4]
console.log(n1, n2, n3, n5);

const [, [, nota]] = [[, 8, 9], [0, 1, 2]]
console.log(nota);