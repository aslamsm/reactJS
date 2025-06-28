// Arrow function greet //
let greet = (name) => {
  return `Hello, ${name}!`;
};
let message = greet("John");
console.log(message);

let greet1 = (name) => console.log(`Hello, ${name}!`);
greet1("Husain");

let greet2 = (name) => `Hello, ${name}!`;
let message2 = greet2("Ashaar");
console.log(message2);

// Arrow function to Calculate area of a Circle //
let calcCircleArea = (radius) => {
  let pi = 3.142;
  return pi * radius * radius;
};
let circleArea = calcCircleArea(10);
console.log(`Area of a circle [3.142 × r2] is : ${circleArea.toFixed(2)}\n`);

// Arrow function to Check if a number is even or odd (true/false)//
let isEven = (n) => (n % 2 == 0 ? console.log("true") : console.log("false"));
isEven(6); // true
isEven(7); // false

//Arrow function name welcome , returns "Welcome to JavaScript" with no parameters.//
let welcome = () => {
  return "Welcome to JavaScript!";
};
console.log(welcome());

// Arrow function findMax(10,20)//
let findMax = (a, b) => {
  return a >= b ? a : b;
};

console.log(`Max of 10 and 20 is : ${findMax(10, 20)}`);
