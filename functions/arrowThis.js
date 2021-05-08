function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}

new Pessoa


let compareWithThis = function (param){
    console.log(this === param);
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global) // Objeto global
compareWithThis(obj)

let compareWithThisArrow = param => console.log(this === param);
compareWithThisArrow(global)
compareWithThisArrow(module.exports) 
// O this de uma arrow function fica no modulo
// Ou seja fica associado ao contexto ao qual ela foi escrita