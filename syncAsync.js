/**
 * Synchronous approach
 */
console.log("Start");

function functionDefination() {
  console.log("Synchronous Execution");
}

functionDefination();

console.log("End");

/**
 * Asynchronous Approach
 */

console.log("Start Asynchronous execution ");

function Asynchrounousfunction() {
  setTimeout(() => {
    console.log("Asynchronous execution ");
  }, 2000);
}

Asynchrounousfunction();

console.log("End Asynchronous");
