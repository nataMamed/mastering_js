const meuNome = "Natã Carneiro"; //Pode ser "", '', ´´

console.log(meuNome.charAt(3)); // Cactere na posição 3
console.log(meuNome.charAt(20)); // Não retorna nd pois está fora do escopo da string
console.log(meuNome.charCodeAt(4)); // Retorna o unicode do caractere selecionado
console.log(meuNome.indexOf("a")); //Primeira posição de ocorrencia

console.log(meuNome.substring(1));
console.log(meuNome.substring(0, 4));

console.log("Eu ".concat(meuNome).concat(" sou legal"));
console.log("Eu " + meuNome + " sou legal");
console.log(meuNome.replace("a", "e")); //Primeira ocorrencia por "e"

console.log("Ana, Pedro, Maria".split(","));
