console.log(Math.ceil(4.5));

const obj1 = {}
obj1.name = "Natã"
obj1['name'] = 'Outro'
console.log(obj1);


function obj(name){
    this.name = name
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new obj('Mesa')
const obj3 = new obj('Cadeira') 
console.log(obj2);
console.log(obj3);
obj3.exec()
