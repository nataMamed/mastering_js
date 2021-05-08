// A função JS carrega consigo o contexto léxio 
// ao qual ela foi definida

const value = 'Global'

function sayVal(){
    console.log(value);
}

function exec(){
    const value = 'Local'
    sayVal()
}

exec()