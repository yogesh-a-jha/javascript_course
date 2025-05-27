// string concepts in JavaScript

//declaration of strings
let str1 = "Hello, World!"; // using double quotes
let str2 = 'Hello, World!'; // using single quotes

const name = new String("Yogesh"); // using String constructor
// console.log(name); // This will log a String object, not a primitive string

// string methods
let str = "Hello, World!";
// console.log(str); // logs the string
// console.log(str.length); // length of the string
// console.log(str.toUpperCase()); // convert to uppercase
// console.log(str.toLowerCase()); // convert to lowercase
// console.log(str.indexOf("World")); // index of substring
// console.log(str.slice(0, 5)); // extract a part of the string
// console.log(str.replace("World", "JavaScript")); // replace substring
// console.log(str.split(", ")); // split the string into an array
// console.log(str.charAt(0)); // character at index 0
// console.log(str.startsWith("Hello")); // check if string starts with substring
// console.log(str.endsWith("!")); // check if string ends with substring
// console.log(str.includes("World")); // check if substring exists in string
// console.log(str.trim()); // remove whitespace from both ends
// console.log(str.repeat(2)); // repeat the string 
// console.log(str.concat(" How are you?")); // concatenate strings
// console.log(str.codePointAt(0)); // get Unicode code point of character at index 0

// string interpolation
let user = "Yogesh";
let age = 22;
// console.log(`My name is ${user} and I am ${age} years old.`); // template literals for string interpolation

