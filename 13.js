// forEach method

const numbers = [1, 2, 3, 4, 5];

const multiplyByTwo = (number) => {
  return number * 2;
};

console.log(multiplyByTwo(3)); // 6

// forEach loop
numbers.forEach((number) => {
  console.log(multiplyByTwo(number)); // 2, 4, 6, 8, 10
});

const user = [
  { name: "John Doe", age: 30, email: "john.doe@example.com" },
  { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  { name: "Sam Brown", age: 22, email: "sam.brown@example.com" },
  { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
];

user.forEach((user) => {
  console.log(`Name: ${user.name}`);
});

user.map((user) => {
  console.log(`Name: ${user.name}`);
});
