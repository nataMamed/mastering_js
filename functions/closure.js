// Escopo criado quando uma função é declarada
// Por isso o nome closure (fechamento)
// Fazendo possível manipular as variáveis externas a função

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const myfunc = fora()
console.log(myfunc());
