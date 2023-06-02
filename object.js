const arrayOfObjects1 = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
  },
];

const names1 = arrayOfObjects1.map((obj) => obj.name);

const arrayOfObjects2 = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
    sub: {
      name: "shivraj",
      age: 35,
    },
  },
];

function getAllNames(objects) {
  let names = [];
  objects.forEach((element) => {
    if (element.hasOwnProperty("name")) {
      names.push(element.name);
    }

    for (const keys in element) {
      let nestedName = "";
      if (typeof element[keys] == "object") {
        nestedName = getAllNames([element[keys]]);
        names = [...names, ...nestedName];
      }
    }
  });
  return names;
}

const names2 = getAllNames(arrayOfObjects2);

/**
 * Deep copy & Shalow Copy of object
 */
const objectsDefination = {
  name: "shivraj",
  roll: 29,
  address: { city: "bangalore", pincode: 560036, state: "karnataka" },
};

// normal copy of object
const objectsNormalCopy = objectsDefination;

const shalowCopy = { ...objectsDefination };

const deepCopy = JSON.parse(JSON.stringify(objectsDefination));

/**
 * Conver the object to array
 */

const convertToArray = (object) => {
  const objectArray = [];
  const innerFunction = (obj) => {
    for (const keys in obj) {
      if (typeof obj[keys] == "object") {
        innerFunction(obj[keys]);
      } else {
        objectArray.push(obj[keys]);
      }
    }
  };
  innerFunction(object);
  return objectArray;
};

const valuesArray = convertToArray(objectsDefination);

/**
 * create the array of objects keys
 */

const arrayOfObjectKeys = Object.keys(objectsDefination);
