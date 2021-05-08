// Stratedy 1
function sum1(a, b, c){
    a = a || 1 // Retorna a primeira parte  se true
    b = b || 1
    c = c || 1

    return a + b +c
}
console.log(sum1(3, 4, 1));

// Stratedy 2
function sum2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return  a + b + c

}

console.log(sum2(1, 2, 3));

// Stratedy 3
function sum(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(sum(3, 4, 5));