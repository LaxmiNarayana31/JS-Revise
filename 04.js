// Loop in array

let fruits = ["apple", "banana", "orange", "grape"];
console.log("Array Length -", fruits.length);

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Do while loop
let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// Using forEach method
fruits.forEach(function (fruit) {
  console.log(fruit);
});
