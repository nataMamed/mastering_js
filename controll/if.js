function ifTrueSay(note){
    if (note >= 7.0){
        console.log('O aluno tirou '+ note);
    }else{
        console.log('Hmm, a nota não foi tão boa');
    }
}

ifTrueSay(7.8)
ifTrueSay(6.8)


function ifTrue(value) {
    if (value){
        console.log('O valor passado é considerado verdadeiro' +  value);
    } else if (!value){
        console.log(value + ' é Falso!');
    }
    
}


ifTrue()
ifTrue(null)
ifTrue(undefined)
ifTrue(NaN)
ifTrue('')
ifTrue(0)

// second part

Number.prototype.between =function(start, end){
    return this >= start && this <= end
}

const printResult = function (note) {

    if (note.between(8, 10)){
        console.log('Great grade!!!');
    } else if(note.between(7, 7.99)){
        console.log('Good grade!!');
    } else if(note.between(4, 6.99)){
        console.log('Recuperação');
    } else if (note.between(0, 3.99)){
        console.log('Reprovado');
    } else{
        console.log('Nota inválida');
    }
    
}

printResult(10)
printResult(7)
printResult(6)
printResult(3)
