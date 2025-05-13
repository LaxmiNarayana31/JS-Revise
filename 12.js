/* callback functions: A function that is passed as an argument to another function is called a callback function. 

 The callback function is executed inside the outer function. Callback functions are used to handle asynchronous operations, such as API calls, timers, and events. They allow you to execute code after a certain task is completed or an event occurs.
 */

function greet(name) {
  console.log(`Happy Birthday ${name}`);
}

function birthdayGreet(greetFunction) {
  const name = "Sumit";
  greetFunction(name);
}

birthdayGreet(greet);

//function returning function
function outerFunction() {
  console.log("Outer function called");
  return function innerFunction() {
    console.log("Inner function called");
  };
}
const innerFunc = outerFunction();
innerFunc();
