// Primitive vs Reference types

// Primitive types
let num1 = 7;
let num2 = num1;

console.log("Value of num1", num1);
console.log("Value of num2", num2);

num1++;

console.log("Value of num1 after increment", num1);
console.log("Value of num2 after increment", num2);


// Reference types
let firstArray = [1, 2, 3];
let secondArray = firstArray;

console.log("firstArray", firstArray);
console.log("secondArray", secondArray);

firstArray.push(6);

console.log("firstArray after push element", firstArray);
console.log("secondArray after push element", secondArray);
