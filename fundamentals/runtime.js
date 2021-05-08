// No browser o objeto global é o window
// sempre que posspivel fuja do escopo global
let a  = 123

global.b = 45

this.c = 1
this.d = 2
this.e = 'teste'

// console.log(global);
console.log(this);
console.log(a);
console.log(global.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);
// module.exports = { c: 1, d: 2, e: 'teste' }

//Variável maluca, sem var e let
abc = 123
console.log(global.abc);

