//concepts of numbers and maths in JavaScript

// +++++++++++++++++++++++++++++++Numbers+++++++++++++++++++++++++++++++

// Numbers objects in JavaScript
// Numbers in JavaScript can be represented as primitive values or as objects.

//declaration of numbers
let num1 = 10; // primitive number
let num2 = 20.5; // primitive number
let num3 = new Number(30); // Number object
let num4 = 10000000; // large number

console.log(num1); // 10
console.log(num2); // 20.5
console.log(num3); // Number object with value 30

// Number methods
console.log(num1.toString()); // convert number to string output: "10"

console.log(num2.toFixed(2)); // format number to 2 decimal places output: "20.50"

console.log(num3.valueOf()); // get primitive value of Number object output: 30

// console.log(Number.isInteger(num1)); // check if num1 is an integer output: true

// console.log(Number.isNaN(num2)); // check if num2 is NaN output: false

// console.log(Number.parseFloat(num2)); // parse num2 as float output: 20.5

// console.log(Number.parseInt(num2)); // parse num2 as integer output: 20

//console.log(num2.precision(2)); // precision of num1 output: 20.5

//console.log(num1.pow(2)); // num1 raised to the power of 2 output: 100

// console.log(num4.toLocaleString('en-IN')); // convert number to locale string output: "1,00,00,000"


// +++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
// Math object in JavaScript

// The Math object provides properties and methods for mathematical constants and functions.
console.log(Math.PI); // π (pi) constant output: 3.141592653589793
console.log(Math.abs(-5)); // absolute value output: 5
console.log(Math.ceil(4.2)); // round up to nearest integer output: 5
console.log(Math.floor(4.8)); // round down to nearest integer output: 4
console.log(Math.round(4.5)); // round to nearest integer output: 5
console.log(Math.max(1, 2, 3)); // maximum value output: 3
console.log(Math.min(1, 2, 3)); // minimum value output: 1
console.log(Math.random()); // random number between 0 and 1 output: e.g., 0.123456789
console.log(Math.sqrt(16)); // square root output: 4
console.log(Math.pow(2, 3)); // 2 raised to the power of 3 output: 8
console.log(Math.log(10)); // natural logarithm output: 2.302585092994046

//generating random numbers
console.log(Math.floor(Math.random() * 100)+1); // random number between 1 and 100 output: e.g., 57



// +++++++++++++++++++++++++++++++Programs+++++++++++++++++++++++++++++++
// program to check if a number is even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(4)); // output: Even

// program to generate a random number between a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(10, 20)); // random number between 10 and 20 output: e.g., 15

// program to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(calculateCircleArea(5)); // area of circle with radius 5 output: 78.53981633974483

// program to calculate the hypotenuse of a right triangle
function calculateHypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}       
console.log(calculateHypotenuse(3, 4)); // hypotenuse of triangle with sides 3 and 4 output: 5

// program to find the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // factorial of 5 output: 120

