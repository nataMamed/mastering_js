// par nome valor
// Contexto Léxico - (tem a ver com a parte em que a variável foi declarada)
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa!'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Natã Carneiro",
    idade: 20,
    peso: 86,
    endereco:{
        logradouro: 'Rua Eusebio de souza',
        numero: 65
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
