
// Retorno opttivo
function area(h, l){
    const area = h * l
    if (area >= 20){
        console.log('Área maior ou igual a 20');
    }else{
        return area
    }
}

console.log(area(4, 5));
console.log(area(3, 5));

console.log(area(1, 2 , 3, 4));
console.log(area('', ''));

// Parametros variáveis

function sum(){
    let sum = 0
    for (i in arguments){
        sum += arguments[i]
    }
    return sum
}

console.log(sum(2, 3, 4, 5, 6));
console.log(sum(2, 'gg', 4, 5, 6));
console.log(sum(2, 3, 4, 5, 6));
