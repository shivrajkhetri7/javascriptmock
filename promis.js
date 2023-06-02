/**
 * Promises is nothing but an object in javascript its also track the whats activities has to be performed
 */

/**
 * Event loop mechanism
 */
console.log("start");
setTimeout(() => {
  console.log("set time 1000");
}, 1000);

setTimeout(() => {
  console.log("set time 0");
}, 0);

Promise.resolve(1).then((res) => {
  console.log("Promise response", res);
});

console.log("End");
