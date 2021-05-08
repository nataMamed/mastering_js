class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  speek() {
    return console.log(`Hello, my name is ${this.name}`);
  }
}

// Nessa declaração o this não fica ligado a classe
const p1 = new Person("Natã", 20);
p1.speek();

// Nessa declaração o nome fica ligado a seu objeto não importa onde for chamado
const createPerson = (n) => {
  return {
    speek: () => console.log(`Hello, my name is ${n}`),
  };
};

const p2 = createPerson("João");
p2.speek();

// Usand uma função construtora

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.speek = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const p3 = new Person("Natã", 20);
p3.speek();
