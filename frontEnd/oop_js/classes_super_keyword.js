// supper - keyword used in classes to call the constructor
//          or access the properties and methods of a parent class (superclass)
//          this keyword - this. object
//          super - parent class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`the ${this.name} moves at a speed of ${speed}`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // calls the parent class' constructor
    this.runSpeed = runSpeed;
  }
  run() {
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 45);

console.log(rabbit.age);
rabbit.run();
fish.swim();
hawk.fly();
