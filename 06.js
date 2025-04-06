// Array destructuring

const fruitArray = ["Apple", "Grapes", "Orange", "Banana"];

// let i = fruitArray[0]
// let j = fruitArray[1]
// let k = fruitArray[2]
// let l = fruitArray[3]
// console.log("Values of fruitArray", i, j, k, l)

// The above task can do with array destructuring
let [i, j, k, l] = fruitArray;
console.log("Values of fruitArray", i, j, k, l);

/* If you don’t know how many elements are in the array, and you want to destructure all elements
 use rest operator (...) */
let [...allFruits] = fruitArray;
console.log("Values of fruitArray", allFruits);
console.log("Get a particular value", allFruits[1]);

const [first, second, ...others] = fruitArray;
console.log("First:", first); // Apple
console.log("Second:", second); // Grapes
console.log("Others:", others); //  [ 'Orange', 'Banana' ]
