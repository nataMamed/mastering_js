const printResult = function (grade) {
    switch (Math.floor(grade)){
        case 10:
        case 9:
            console.log('Quadro de honra ');
            console.log('Aqui'); // Executa mais de uma sentença sem chaves
            break
        case 8: case 7:
            console.log('Aprovado!');
            break
        case 6: case 5: case 4:
            console.log('Recuperação!');
            break
        case 3: case 2: case 1:
            console.log('Reprovado!');
            break
        default: // O default pode ser colocado em qualquer parte (lembra do break)
            console.log('Nota inválida');

    }
}

printResult(10)