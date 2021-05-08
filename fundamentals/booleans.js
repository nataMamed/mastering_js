isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // !! transforma em valor bool

console.log("Os verdadeiros...");
console.log(!!3); //Qualquer numero a não ser zero é true
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Atribuição para a qual o valor resolvido é verdadeiro

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Por ultimo...");
console.log(!!('' || null || 0 || 'Natã' ));
console.log(('' || null || 'Natã'));

// Exemplo muito util e funciona em python 
let nome = 'Natã'
console.log(nome || 'Desconhecido');
