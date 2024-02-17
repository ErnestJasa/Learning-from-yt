class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      // underscore (_) makes the variable private
      this._firstName = newFirstName;
    } else {
      console.error("first name must not be empty string");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      // underscore (_) makes the variable private
      this._lastName = newLastName;
    } else {
      console.error("last name must not be empty string");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("last name must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("fsdaf", "sgfdg", 66);

console.log(person.age);
person.age = 45;
console.log(person.age);
