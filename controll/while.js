function getRandomBetween(max, min) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}


let option = 0

while (option != -1){
    option = getRandomBetween(10, -1)
    console.log(`Opção escolhida: ${option}`);
}
console.log('fim');