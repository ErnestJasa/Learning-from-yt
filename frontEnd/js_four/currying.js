// Currying - when a function returns another function(closure) that expects a new parameter

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(6));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(6)(1));

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") {
        return a + b;
      } else if (operation === "multiply") {
        return a * b;
      } else if (operation === "divide") {
        return a / b;
      } else if (operation === "subtract") {
        return a - b;
      } else return "invalid operation";
    };
  };
}

console.log(evaluate("df")(1)(2));

// infinite Currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log(add(1)(2)(2)());

// Partial application
function sum2(a) {
  // partial application is different from currying in that a number of functions differs from the number of arguments given
  return function (b, c) {
    return a + b + c;
  };
}

// Using Currying to manipulate DOM

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }
// const updateHeader = updateElementText("heading");
// updateHeader("some different text");

// A function that converts a normal function into a Curried function

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        console.log(next);
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const sum3 = (a, b, c) => a + b + c;
const totalSum = curry(sum3);

console.log(totalSum(2)(2)(5));
