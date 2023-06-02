const string = "This is Javascript";
/**
 * reverse string
 */

const splitString = string.split(" ");
const reverseString = splitString.map((item) => {
  let arrayOfString = item.split("").reverse().join();
  return arrayOfString.replace(/,/g, "");
});

/**
 * @returns sihT si tpircsavaJ
 */

/**
 * @Query find the capital latters from the string
 */

const capitalLatters = string.matchAll(/[A-Z]/g);
const listOfLatters = Array.from(capitalLatters, (match) => match[0]);

//console.log(listOfLatters);
