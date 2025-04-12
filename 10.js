// Object destructuring

const bank = {
  name: "HDFC bank",
  location: "Mumbai",
  established: 1994,
  employees: 10000,
};

const bankInfo = bank.location;
console.log(bankInfo);

const { name, location } = bank;
console.log(name); // HDFC bank

const { established, ...restProperties } = bank;
console.log(restProperties); // { name: 'HDFC bank', location: 'Mumbai', employees: 10000 }

// Object inside array
const users = [
  { userId: 1, name: "Sumit", age: 23 },
  { userId: 2, name: "Laxmi Narayana", age: 23 },
  { userId: 3, name: "Shiva", age: 23 },
];

console.log(users);

const [user1, user2, user3] = users;
console.log(user1);

for (let user of users) {
  console.log(user);
  console.log(user.name);
}


// Nested object destructuring
