// Spread operator

// const array1 = ["Sumit", "Amit", "Laxmi Narayana"];

// let [...allNmaes] = array1;
// console.log(allNmaes[0]);
// console.log(allNmaes[1]);
// console.log(allNmaes[2]);

// const array2 = ["Apple", "Banana", "Cherries"];
// const array3 = ["India", "Switzerland", "USA"];

// let [...all] = [...array1, array2]; // array2 is not opend
// console.log("final array", all);

// const newArray = [..."abc"];
// console.log(newArray); // [ 'a', 'b', 'c' ]

// Spread Operator in Onjects
const obj1 = {
  name: "Sumit",
  age: 25,
  city: "Ahmedabad",
  country: "India",
  hobbies: ["Coding", "Reading", "Travelling"],
};

const obj2 = {
  name: "Amit",
  age: 21,
  city: "Pune",
  country: "India",
  hobbies: ["Reading", "Travelling"],
};
``;

const newObject = { ...obj1, ...obj2 }; 

// It only prints second object only because keys are overriding the first object
console.log(newObject);

// if keys are different then it merge it
const obj3 = {
  height: "5.6",
  weight: "60kg",
  profession: "Software Engineer",
};

const newObject2 = { ...obj1, ...obj3 }; 
console.log(newObject2);
