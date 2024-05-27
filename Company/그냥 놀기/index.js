class Person {
  constructor(name, age, mother) {
    this.name = name;
    this.age = age;
    this.mother = mother;
  }
}

const tim = new Person("Tim", 31, null);
const tina = new Person("Tina", 57, null);

tim.mother = tina;

console.log(tim.mother);

const grandma = new Person("Sherry", 80, null);

tina.mother = grandma;

console.log(tina.mother);
console.log(tim.mother.name);
