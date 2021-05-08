function tratarErro(_e) {
  // Pode enviar qualquer coisa no throw
  // console.log('deu ruim');
  // throw new Error('...')
  throw {
    nome: _e.name,
    msg: _e.message,
    date: new Date
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(`${obj.name.toUpperCase()} + !!!`);
  } catch (e) {
    tratarErro(e);
  } finally {
    console.log("final");
  } // O bloco finally é executado de qualquer modo
}

const obj = {
  nome: "Natã",
};
console.log(imprimirNomeGritado(obj));
