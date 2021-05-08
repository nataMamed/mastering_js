// Operadores estritamente iguais levam em consideração
// o valor e o tipo

console.log("01)", "1" == 1);
console.log("02)", "1" === 1);
console.log("03)", "2" != 2);
console.log("04)", "2" !== 2);

console.log("05)", 3 < 5);
console.log("06)", 5 > 8);
console.log("07)", 3 <= 4);
console.log("08)", 7 >= 5);

const d1 = new Date(0)
const d2 = new Date(0)
// Lembrando que d1 e d2 recebem apontam para um endereço de memória
console.log("09)", d1 == d2); // Compara os endereços de memória
console.log("10)", d1 === d2);
console.log("11)", d1.getTime() == d2.getTime());
console.log("12)", d1.getTime() === d2.getTime());


console.log("13)", undefined == null);
console.log("14)", undefined === null);

