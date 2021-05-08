// Objetos em js são coleções de chave valor
// json é um formato textual

const prod1 = {};
prod1.nome = "Laptop";
prod1.preco = 7990.9;
prod1["Desconto legal"] = 0.3; // evitar espaços

console.log(typeof prod1.nome);
// Json: {"nome":"Calça", "Preço":10}
// Chaves sempre são strings
console.log(prod1);
const prod2 = {
  nome: "Calça",
  preco: 80.0,
};
console.log(prod2);
