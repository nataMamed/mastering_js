// O let terá 3 escopos
// global - de bloco - de função

let vari = 1;

{
  let vari = 2;
  console.log("dentro = ", vari);
}

console.log("fora = ", vari);


// let em loops
for (let i = 0; i < 10; i++){
    console.log(i);
}
// console.log('i=', i); Erro!

// Problema histórico js solucionado com let
// A função tem conhecimento do local de definição
const funcs = [];
for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
console.log(funcs);
funcs[2]()
funcs[8]()

