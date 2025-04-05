// How to clone array

let array1 = ["Sumit", "Amit"];
let array2 = array1; // Shallow copy

console.log(array1 === array2); // true

array2.push("Laxmi Narayana");

console.log(array1);

// using slice method for array cloning
let array3 = array1.slice();
console.log(array1 === array3); // false

array3.push("New Item");
console.log(array3); // [ 'Sumit', 'Amit', 'Laxmi Narayana', 'New Item' ]

// using concat method for array cloning
let array4 = [].concat(array1);
console.log(array1 === array4); // false

// using spread operator for array cloning
let array5 = [...array1];
console.log(array1 === array5); // false
console.log(array5); // [ 'Sumit', 'Amit', 'Laxmi Narayana' ]
