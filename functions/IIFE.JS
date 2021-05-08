// IIFE: Immediately Invoked Function Expression
// Quando o código é lido é criado um escopo local
// que foje do global evitando conflitos
// É envolvida dentro de parênteses

// const global1 = '5'
(function(){
    const global1 = '4'
    console.log('Executada', global1); // erro, pois n pega global1
    console.log('é pauuuu');
})()

