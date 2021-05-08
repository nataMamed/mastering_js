const pessoa = {
    saudacao: 'Bom dia ',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito paradigma funcional x OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Amarra a resolução para o objeto pessoa
falarDePessoa()


function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa