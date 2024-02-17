class Person {
  #name;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
}

const person = new Person("vardas", 50);

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress() {
    return this.address;
  }
  getPrice() {
    return this.price;
  }
  getResidents() {
    return this.residents;
  }
  addResident(resident) {
    this.residents.push(resident);
  }
}

class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age); // super refers to the parent class, in this case Person.
    this.company = company;
    this.salary = salary;
    this.language = language;
  }
  sayHi() {
    console.log(
      `Hello my name is ${this.getName()}, i work for ${this.company}`
    );
  }
}

const person2 = new Person("name", 26);
const person3 = new Person("rethj", 86);

const house = new House("dhf", 546503, [person, person2]);
console.log(house.getResidents());
house.addResident(person3);
console.log(house.getResidents());

const programmer = new Programmer("erh", 65, "lethal", 16541, "notJs");
programmer.sayHi();
