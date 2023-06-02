function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Not a prime number
    }
  }

  return true; // Prime number
}

/**
 * @function isPalindrome
 * @param {*} number
 * @returns {true / false}
 */
function isPalindrome(number) {
  const numberString = String(number);
  const reversedString = numberString.split("").reverse().join("");

  return numberString === reversedString;
}

/**
 * @function factorialRecursive
 * @param {*} number
 * @returns
 */
function factorialRecursive(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorialRecursive(number - 1);
  }
}

function fibonacciRecursive(number) {
  if (number <= 1) {
    return number;
  } else {
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
  }
}

// Generate Fibonacci series using recursion
function generateFibonacciRecursive(count) {
  const fibonacciSeries = [];
  for (let i = 0; i < count; i++) {
    fibonacciSeries.push(fibonacciRecursive(i));
  }
  return fibonacciSeries;
}

/**
 * Peroform addition
 * @param 54321
 * @return 6
 */

const additionNumbers = (number) => {
  const numberToString = `${number}`;
  const numberToArray = numberToString.split("");
  let resultan = numberToArray.reduce((a, b) => parseInt(a) + parseInt(b));
  if (resultan > 10) {
    return additionNumbers(resultan); // Add "return" before the recursive call
  }
  if (resultan < 10) {
    return resultan;
  }
  return resultan;
};
