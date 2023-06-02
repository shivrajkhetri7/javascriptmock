/**
 * Closure is Nothing but a function which return the function with its Lexical environment
 */

function parent() {
  let a = 10;
  let b = 20;
  function child() {
    return a + b;
  }
  return child();
}

console.log(parent());
