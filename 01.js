// Arrays

// Array is ordered collection of items, it is reference type. We can store ay kind of datatype in arrays>\
let names = ["Harry", "Shiva", "Sam"];

console.log(names);
console.log(names[-1]); // Undefined
console.log(names[1]);
console.log(typeof names[0] === "string");

console.log(Array.isArray(names)); // check array or not

// push
console.log(names.push("Laxmi Narayana"));
console.log(names);

// pop -> Remove the last element
removedName = names.pop();
console.log(removedName);

// push and pop more faster than shift and unshift because they change the memory location
// unshift -> Add element at beginning
console.log(names.unshift("Hello"));
console.log(names);

// shift -> Remove element from beginning
console.log(names.shift());
console.log(names);
