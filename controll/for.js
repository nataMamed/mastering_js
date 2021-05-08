
let cont = 0

while (cont <= 10){
    console.log(`Contador ${cont}`);
    cont++
}

for (let i = 0; i <= 10; i++){
    console.log(`Contador ${i}`);
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= 10; i++){
    console.log(array[i]);
}

console.log('for in ');
for (let i in array){ // Percorre indices
    console.log(array[i]);
}

const person = {
    name: 'Natã',
    sobrenome: 'Mamede',
    idade: 20
}

for (let att in person){
    console.log(`${att} = ${person[att]}`);
}