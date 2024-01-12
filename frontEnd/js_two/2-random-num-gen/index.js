const min = 50;
const max = 100;

// let randomNum = Math.floor(Math.random() * 6) + 1; // gives a random number between 1 and 6
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);

const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("myLabel");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");

const minDice = 1;
const maxDice = 6;

let randomDice;
let randomDice2;
let randomDice3;

myBtn.onclick = function () {
  randomDice = Math.floor(Math.random() * maxDice) + minDice;
  randomDice2 = Math.floor(Math.random() * maxDice) + minDice;
  randomDice3 = Math.floor(Math.random() * maxDice) + minDice;
  label1.textContent = randomDice;
  label2.textContent = randomDice2;
  label3.textContent = randomDice3;
};
