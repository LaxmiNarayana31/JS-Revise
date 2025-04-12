// Onjects -> ALso called object literal

/* 
Object store values in key-value pair. 
It is reference data type.
Object dont have index
*/

const person = {
  name: "LaxmiNarayana",
  age: 23,
  profession: "Software Engineer",
  country: "India",
  skills: ["JavaScript", "Python", "Java", "C++"],
};

console.log(person);
console.log(person.country);
console.log(person["country"]);
console.log(person.skills[1]);

// add key value pair
person.gender = "male";
console.log(person);

// Object iteration
for (let key in person) {
  console.log(key, person[key]);
}
