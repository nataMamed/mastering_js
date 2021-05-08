const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Break');
for (let num in numbers){
    if (numbers[num] == 5){
        break
    }
    console.log(`${num} = ${numbers[num]}`);
}

console.log('Continue');
for (let num in numbers){
    if (numbers[num] == 5){
        continue // Passa para a próxima iteração
    }
    console.log(`${num} = ${numbers[num]}`);
}

// Quebrando um laço externo
// Não é recomendável, pois desvia muito o fluxo
externo: for (let i in numbers){
    for (j in numbers){
        if (numbers[j] == 5){
            break externo
        }
        console.log(`Par ${i}, ${j}`);
    }
}