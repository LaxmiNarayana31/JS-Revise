// Array Methods in JavaScript

// Map method: It takes a callback function as an argument and its return type is an array.
const names = ["Shiva", "Sumit", "Laxmi Narayana"];
const upperCaseNames = names.map((name) => {
  return name.toUpperCase();
});
console.log(upperCaseNames); // [ 'SHIVA', 'SUMIT', 'LAXMI NARAYANA' ]

// filter method: It takes a callback function as an argument and its return type is an array.
fruits = ["apple", "banana", "orange", "kiwi", "mango"];
const filteredNames = fruits.filter((name) => {
  return name.length > 5;
});
console.log(filteredNames); // [ 'banana', 'orange' ]

// reduce method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(
    `${accumulator} + ${currentValue}` + ` = ${accumulator + currentValue}`
  );
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

/*
How it works

accumulator     currentValue     return
0                1                1
1                2                3
3                3                6
6                4                10
10               5                15
*/

const userCart = [
  { productId: 1, product: "mobile", price: 12000 },
  { productId: 2, product: "laptop", price: 32000 },
  { productId: 3, product: "tv", price: 52000 },
];

const totalPrice = userCart.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log(totalPrice);

// sort method: It takes a callback function as an argument and its return type is an array. It changes the original array.
// When you sort in js, it converts the elements to strings and compares their sequences of UTF-16 code unit values.
/* 
ASCII values

"0" : 48    ":" : 58    "[" : 91    "{" : 123
"1" : 49    ";" : 59    "\" : 92    "/" : 124
"2" : 50    "<" : 60    "]" : 93    "}" : 125
"3" : 51    "=" : 61    "^" : 94
"4" : 52    ">" : 62    "_" : 95
"5" : 53    "?" : 63    "`" : 96
"6" : 54    "@" : 64
"7" : 55
"8" : 56
"9" : 57

"A-Z" : 65-90
"a-z" : 97-122
*/

const numbersArray = [5, 9, 1200, 410, 3000];
// Treat the numbers as strings : ["5", "9", "1200", "410", "3000"]
// Convert to ASCII values and sort : [53, 57, 49, 52, 51]
sortedNumbers = numbersArray.sort();
console.log(sortedNumbers); // [ 1200, 3000, 410, 5, 9 ]

sortNumbers = numbersArray.sort((a, b) => {
  return a - b;
});
console.log(sortNumbers); // [ 5, 9, 410, 1200, 3000 ]

const userNames = ["Shiva", "Amit", "Laxmi Narayana"];
sortedNames = userNames.sort();
console.log(sortedNames); // [ 'Amit', 'Laxmi Narayana', 'Shiva' ]

const userNames2 = ["Shiva", "Amit", "Laxmi Narayana", "AMIT", "ABCD"];
sortedNames2 = userNames2.sort();
console.log(sortedNames2);

const products = [
  { productId: 1, ProductName: "product1", price: 200 },
  { productId: 2, ProductName: "product2", price: 100 },
  { productId: 3, ProductName: "product3", price: 300 },
  { productId: 4, ProductName: "product4", price: 50 },
  { productId: 5, ProductName: "product5", price: 150 },
];

//  ascending order
const sortProducts = products.sort((a, b) => {
  return a.price - b.price;
});
console.log("Ascending order:", sortProducts);

//  descending order
const sortProducts2 = products.sort((a, b) => {
  return b.price - a.price;
});
console.log("Descending order:", sortProducts2);

// find method: It takes a callback function as an argument and its return type is an object. It returns the first element that matches the condition.
const countries = ["India", "USA", "UK", "Australia"];
const ans = (string) => {
  return string.length > 3;
};
console.log(countries.filter(ans));
console.log(countries.find(ans)); // India

// every method: It takes a callback function as an argument and its return type is a boolean. It returns true if all elements match the condition.
const numberArr = [1, 2, 3, 4, 5];
const allEven = numberArr.every((num) => {
  return num % 2 === 0;
});
console.log(allEven); // false

const usercard = [
  { productId: 1, product: "mobile", price: 9000 },
  { productId: 2, product: "laptop", price: 32000 },
  { productId: 3, product: "tv", price: 7000 },
  { productId: 4, product: "tablet", price: 20000 },
];

const allProducts = usercard.every((cardItem) => {
  return cardItem.price > 10000;
});
console.log(allProducts); // false

// some method: It takes a callback function as an argument and its return type is a boolean. It returns true if at least one element matches the condition.
const num = [1, 2, 3, 4, 5];
const someEven = num.some((number) => {
  return number % 2 === 0;
});
console.log(someEven); // true

// fill method: It takes a value and replaces all the elements in the array with that value. It changes the original array.
const newArray = new Array(5).fill(-2);
console.log(newArray);


// Splice method
// in array in which delete or insertion required that case used this

const myarray = ["item1", "item2", "item3", "item4", "item5"];

// delete 
myarray.splice(2, 1);
console.log(myarray); // [ 'item1', 'item2', 'item4', 'item5' ]