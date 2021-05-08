// Usando var
// O var terá dois escopos possíveis
// 1 - global; 2 - Escopo de função

// Global
// Declarando um var dentro de blocos que não seja de uma função
{
  {
    {
      {
        var nome = "Natã";
      }
    }
  }
}
console.log(nome);

// Função
function declara(string) {
  var str = string;
  console.log(str);
}
declara("natã");
// console.log(str); Erro!

// Var em loops - fica disponível no escpo global
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("i =", i);

// Problema histórico do js
const funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]()
funcs[8]()

