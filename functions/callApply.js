
// Nesse contexto o this esta acessando o global
function getPrice(tax = 0, coil = 'R$'){
    return `${coil} ${this.price * (1 - this.desc)*(1 + tax)}`
}

const prod = {
    name: 'Notebook',
    price: 4589,
    desc: .015,
    getPrice
}
// Acessa o global
global.price = 20
global.desc = 0.1
console.log(getPrice());

console.log(prod.getPrice());

const car = {price: 49000, desc: 0.2}

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

// DIferença na chamada utilizando call e apply
console.log(getPrice.call(car, 0.13, '$'));
console.log(getPrice.apply(car, [0.13, '$']));

