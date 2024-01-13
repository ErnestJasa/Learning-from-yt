const colors = ["red", "green", "blue", "black", "white"];

// swaps the values in the array
// [colors[0], colors[4]] = [colors[4], colors[0]];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(extraColors);
