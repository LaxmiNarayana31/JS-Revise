// Functions
/*
Parameter: Values that passed during function definition
Argument: Values that passed during function call
*/

// Normal function
function greet(name) {
  console.log(`Happy Birthday ${name}`);
}
greet("Sumit");

// Function expressions - Hold the function in a variable, in this function name is not defined
birthdayGreet = function (name) {
  console.log(`Happy Birthday ${name}`);
};

birthdayGreet("Sumit");

// Arrow function
const greetBirthday = (name) => {
  console.log(`Happy Birthday ${name}`);
};

greetBirthday("Sumit");

// Hoisting - Function declaration is hoisted to the top of the file, but function expression is not hoisted

sayHi("Sumit");

function sayHi(name) {
  console.log(`Hi ${name}`);
}

// function inside the functions
function outerFunction() {
  console.log("Outer function called");

  function innerFunction() {
    console.log("Inner function called");
  }

  innerFunction();
}

outerFunction();

const globalVar = "Global variable";

function functionOne() {
  const localVar = "Local variable";
  console.log(globalVar);

  function functionTwo() {
    const functionThree = () => {
      console.log("Function three called");
      console.log(localVar);
    };
    functionThree();
  }
  functionTwo();
}
functionOne();

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log("IIFE called");
})();

// default parameters -> If you don't pass any value, it will take the default value
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet(); // Hello Guest
greet("Shiva"); // Hello Shiva

// Rest parameters - It allows you to pass a variable number of arguments to a function
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Parameter destructuring - It allows you to extract values from an object or array and assign them to variables in a single step
const myObject = {
  name: "Shiva",
  age: 25,
  city: "BBSR",
};

function printDetails({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
printDetails(myObject);
