// Uma função factory é uma função que retorna um objeto

function createProduct(name, price, discount = 0.1){
    return {
        name: name, // Poderia apenas colocar name
        price: price,
        discount: discount
    }
}

const prod1 = createProduct('Caneta', '2')
console.log(prod1);