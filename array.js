/**
 *  Here array interview Question
 */

const array = [10, 23, 85, 98, 7, 63, 897, 74, 96, 74, 7, 96, 74, 96, 34];

/**
 * Query
 * 1 . find the largest number from array
 */

let largestNumber = 0;
array
  .filter((item) => typeof item == "number")
  .forEach((item) => {
    if (item > largestNumber) {
      largestNumber = item;
    }
  });

/**
 * Query
 * 2 . filter reputed  array element
 */

const reputedList = array.filter((item, index) => {
  return array.indexOf(item) !== index;
});

/**
 * Query
 * 3. filter unique values from array
 */

const uniqueList = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

/**
 * Query
 * 4. Add the element at specific location in array list
 */

array.splice(1, 0, 120);

/**
 * Query
 * 5. Remove the element from specific location in array list
 */

array.splice(0, 1);

/**
 * Query
 * 6. convert array list to array of object
 */

const arrayObject = array.map((item, index) => {
  return { [index]: item };
});

/**
 * Query
 * 7. sort the array
 */

const sortedArray = uniqueList.sort((a, b) => a - b);

/**
 * Query
 * 8. sum of all the element
 */

let sumOfArray = 0;
array.forEach((item) => {
  sumOfArray += item;
});

/**
 * Query
 * 9. find the least value from array list
 */

let leastValue = Infinity;

array
  .filter((item) => typeof item === "number")
  .forEach((element) => {
    if (leastValue > element) {
      leastValue = element;
    }
  });

const nestedArray = [
  1,
  2,
  [52, 65, 89],
  [78, 33, 7, 66],
  [77, 3, 64, 7, [7, 32, 41, 5]],
];

let nestedResult = [];

function test1(arr) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      test1(element);
    } else {
      nestedResult.push(element);
    }
  });
}

test1(nestedArray);

const arraySort = [5, 7, 9, 11, 15, 37];
// output 13

const initialValue = arraySort[0];
const lastElement = arraySort[arraySort.length - 1];

const missingArray = [];
for (let i = initialValue; i < lastElement; i++) {
  if (!arraySort.includes(i) && i % 2 !== 0) {
    missingArray.push(i);
    break;
  }
}

const arrayTest1 = [2, 7, 11, 4, -2];
// result [20,15,11,18,24]

// Find the second largest number

const secondLargets = arrayTest1.sort((a, b) => a - b)[arrayTest1.length - 2];

/**
 * Mountain Array
 */

const arrayMount = [1, 2, 3, 5, 9, 3, 2, 3];
const mountainArray = (arrayMount) => {
  let result = false;

  let higherOrder = false;
  let lowerOrder = false;
  if (arrayMount.length < 0) {
    return result;
  }

  let peakIndex = 0;

  for (let index = 0; index < arrayMount.length; index++) {
    if (!(arrayMount[index + 1] > arrayMount[index])) {
      peakIndex = arrayMount[index];
      higherOrder = true;
      break;
    }
  }

  for (
    let index = arrayMount.indexOf(peakIndex);
    index < arrayMount.length;
    index++
  ) {
    if (arrayMount[index + 1] < arrayMount[index]) {
      lowerOrder = true;
    } else if (arrayMount[index + 1] > arrayMount[index]) {
      lowerOrder = false;
      break;
    }
  }

  if (higherOrder && lowerOrder) {
    result = true;
  }

  return result;
};

console.log(mountainArray(arrayMount));
