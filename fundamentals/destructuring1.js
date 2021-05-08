// Retirando elementos de um objeto
// Usa a sintaxe das chaves
const pessoa = {
  nome: "daniel",
  idade: 23,
  endereco: {
    rua: "Rua dos gorilas",
    numero: 234,
  },
};

// Traz nome e idade para o código
// Lá de pessoa traz nome e idade
const { nome, idade } = pessoa;
console.log(nome, idade);

// Modificando o nome das variáveis
const { nome: n, idade: id } = pessoa;
console.log(n, id);

// Tentando acessar atributos inexistentes
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Acessando atributos de forma aninhada
// Tem que ter certeza que esse caminho existe
const { endereco: {rua, numero}} = pessoa
console.log(rua, numero);