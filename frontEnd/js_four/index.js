// https://youtu.be/tbqVqP5ilzQ?t=3862

// 1. function expression - when you store a function in a variable
const square = function (num) {
  // this function is called anonymous function, that doesn't have a name
  return num * num;
};

// 2. first class functions - i guess a function that can take in another function as a parameter
function displaySquare(someFunction) {
  console.log("square is " + someFunction());
}

// 3. IIFE - means immediately invoked function expressions
(function callThisRightAway(someParam) {
  console.log(someParam);
})(); // function gets executed right away

// 4. Closure is the combination of a function bundled together (enclosed) with references to its surrounding state.
// AKA closure gives you access to an outer function's scope from an inner function.

// 5. variable declared with var are function-scoped or globally-scoped.
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2

// 6. let declaration declares re-assignable block-scoped local variables. Const does the same just value can't be changed.

// 7. variable hoisting
var y = 21;
const fun = function () {
  console.log(y); // gives undefined if declared as var, or an error if declared with let
  var y = 20; // when the code gets compiled the variable declaration itself gets hoisted to the top of its scope,
  // but the value assignment stays in the same place
  // thats why the console log above doesn't print the globally declared variable.
  // It sees that this one, with the same name exists in this local scope
};
fun();

// 8. Params(parameters) are called the values that a function takes in. Arguments are values that get passed into the function when it gets called

function blabla(yapyap) {
  // 'yapyap' is a parameter here
  console.log(yapyap);
}
blabla("yapyap"); // yapyap is an argument here

// 9. callback function - is a function passed into another function as an argument, which is then invoked inside the outer function

function greeting(name) {
  console.log("hello " + name);
}
function processUserInput(callback) {
  var name = "inputted name";
  callback(name);
}
processUserInput(greeting);

// 10. Arrow and normal functions

function fn() {
  console.log(arguments); // it can still take in arguments even if there are no parameters declared
}
fn(1, 3, 4); // this works

const arrowFn = () => {
  console.log(arguments); // it can't taken in arguments if there are no parameters declared
};
arrowFn(1, 2, 5); // this doesn't work

let user = {
  username: "something",
  arrowFunction: () => {
    console.log("username is: " + this.username); // in an arrow function 'this' keyword points to global scope and here it returns undefined
  },
  normalFunction() {
    console.log("username is: " + this.username); // in regular function 'this' points to local scope and returns the username declared in the user object
  },
};

// if we declare i with var it gets hoisted outside the loop, because it is function scoped.
// and the setTimeout uses it as a reference when accessing its value.
// and it accesses the value only after the loop had finished running, and the last value i had was 5
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// to get the same behavior as let with var, we need to use closure
// for (var i = 0; i < 5; i++) {
//   function inner(index) {
//     setTimeout(() => {
//       console.log(index); // here index has access only to the values that get passed through when it gets called.
//     }, 5000);
//   }
//   inner(i);
// }

// 11. function returning closure
function createBase(num) {
  return function addOuterToInnerNum(innerNum) {
    console.log(innerNum + num);
  };
}
// addSix becomes the 'addOuterToInner' function that gets returned from above
const addSix = createBase(6);
addSix(10); // returns 16

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}
// when getting returned a closure function like this, the code before the return only has to run once.
// Like the loop in the function find now will only run once, when we declare the closure variable.
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");

// private counter
function counter() {
  let _counter = 0;
  function add(increment) {
    _counter += increment;
  }
  function retrieve() {
    return "Counter = " + _counter;
  }
  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());

// Module pattern - when we declare functions inside other functions that can't be accessed from outside of the parent function.

// dunno, fake call once function
let view;
function getView() {
  let calledTimes = 0;

  return function private() {
    if (calledTimes > 0) {
      console.log("was called before");
    } else {
      view = "bla bla bla";
      console.log("sub to " + view);
      calledTimes++;
    }
  };
}
const call = getView();
call();
call();

// run only once function.
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments); // runs the function and puts the result in ran
      func = null; // after that makes the function null
    }
    return ran; // and just returns the functions' result. making it only run once
  };
}

const hello = once(() => console.log("hello"));
hello(); // will only run once because it gets initialized only once, above
hello();
hello();
hello();

// Caching/Memoizing function

function myMemoize(fn, context) {
  const result = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!result[argsCache]) {
      result[argsCache] = fn.call(context || this, ...args);
    }
    return result[argsCache];
  };
}
function clumsySquare(num1, num2) {
  for (let i = 0; i < 100000000; i++) {}

  return num1 * num2;
}

const memoizedClumsySquare = myMemoize(clumsySquare);

console.time("first call");
console.log(memoizedClumsySquare(986547, 565467));
console.timeEnd("first call");
console.time("second call");
console.log(memoizedClumsySquare(986547, 565467));
console.timeEnd("second call");
