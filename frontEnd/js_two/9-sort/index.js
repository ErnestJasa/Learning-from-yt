let numbers = [1, 10, 5, 4, 7, 6, 8, 9, 3, 2];

// sorts the numbers correctly, from lowest to biggest.
// without the math inside it would sort alphabetically
numbers.sort((a, b) => a - b);

const people = [
  { name: "SpongeBob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "SquidWard", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4 },
];
// sorts by age
people.sort((a, b) => a.age - b.age);
// by gpa
people.sort((a, b) => a.gpa - b.gpa);
// sorts an array of objects alphabetically by the used property
people.sort((a, b) => a.name.localeCompare(b.name));
