/**
 * Map function is Higher order function which takes the call back function as argument and return new array
 */

const e = require("cors");

/**
 * @Query retrun the sum of array element
 */

let array = [1, 2, 5, 6, 2, 4, 2, 4, 3, 3];

let SumOfArrayEle = 0;

// array.map((element) => {
//   SumOfArrayEle = SumOfArrayEle + element;
// });

// const newArr = array.map((element) => {
//   return element * 2;
// });

const newArr = array.forEach((element, index) => {
  array.splice(index, 1, element * 5);
});

console.log(array);
