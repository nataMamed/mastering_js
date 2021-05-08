

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50    = trabalho1 && trabalho2
    const comprartv32    = trabalho1 != trabalho2 // funciona como um ou exclusivo
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const manterSaudavel = !comprarSorvete

    return {
        comprarSorvete, comprarTv50, comprartv32, manterSaudavel
    } // Cria implicitamente a chave de mesmo nome da variável
}


console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
