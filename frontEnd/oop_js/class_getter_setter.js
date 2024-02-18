// getter - special method that makes a property readable
// setter - special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    // without a get method, these values return undefined
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      // underscore (_) before the property name just means its a private variable, and people shouldn't change it, even though they can
      this._width = newWidth;
    } else {
      console.error("width must be a positive number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }
}
const rectangle = new Rectangle(1, 5);
console.log(rectangle.width);
console.log(rectangle.height);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("first name must be string and not empty");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("last name must be string and not empty");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("age must be a number greater than 0");
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

// const person = new Person(456, 78, "jghk");
const person2 = new Person("SpongeBob", "SquarePants", 30);
console.log(person2.firstName);
console.log(person2.fullName);
console.log(person2.age);
