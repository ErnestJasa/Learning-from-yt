function greet(greeting, name, age) {
  console.log(this.name); // gets the name from the person object
  console.log(`${greeting}, ${name}!`, age); // gets the name, greeting and age from the args array, destructuring it
}
const person = { name: "john" };
const args = ["hello", "john", 36];
greet.apply(person, args); // person gets set as 'this' object in the function. and i guess it just floats out there somewhere
