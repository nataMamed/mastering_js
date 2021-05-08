const sum = function (a, b){
    return a + b
}

function printResult(a, b, operation = sum){
    console.log(operation(a, b))
}

printResult(3, 4)
printResult(4, 5, sum)
printResult(9, 10, function (a, b){
    return a - b
})

printResult(6, 7, (x, y) => x * y)


const obj = {
    falar: function (){
        console.log('Olá');
    }
}

obj.falar()