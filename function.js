//  normal function

function malfunction() {
  console.log("Function definition ");
}

const arrowFunction = () => {
  console.log("test ");
};

/**
 * @description Difference between arrow function and normal function
 */
// Normal function
function normalFunction() {
  console.log(this.name); // 'this' refers to the global object (window in a browser environment)
}

// Arrow function
const fatarrowFunction = () => {
  console.log(this.name); // 'this' refers to the lexical scope where the arrow function is defined
};

const obj = {
  name: "John",
  normal: normalFunction,
  arrow: fatarrowFunction,
};

// obj.normal(); // Logs the global object (window)
// obj.arrow(); // Logs the obj object

/**
 * Pure function
 */
let x = 10;
function pureFunction(x) {
  return x + 1;
}

/**
 * Impure function
 */

var y = 10;
function impurepureFunction() {
  return y++;
}

/**
 * Trick
 */

function trick() {
  let a = (b = 0);
  a++;
  return a;
}

console.log(trick());
