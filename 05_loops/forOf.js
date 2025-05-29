// forOf loop concept

// Example of for...of loop in JavaScript
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number); // Output: 1, 2, 3, 4, 5
}

// The for...of loop iterates over iterable objects like arrays, strings, etc.
// It provides a simpler syntax compared to traditional for loops.

// Example with strings
const message = "Hello, World!";
for (const char of message) {
    console.log(char); // Output: H, e, l, l, o, ,,  , W, o, r, l, d, !
}

// Example with a Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);     
for (const num of uniqueNumbers) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}

// Example with a Map
const userRoles = new Map([
    ["Alice", "Admin"],
    ["Bob", "User"],
    ["Charlie", "Guest"]
]);
for (const [user, role] of userRoles) {
    console.log(`${user}: ${role}`); // Output: Alice: Admin, Bob: User, Charlie: Guest
}


// Example with an array of objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

for (const user of users) {
    console.log(`${user.name} is ${user.age} years old.`); // Output: Alice is 30 years old., Bob is 25 years old., Charlie is 35 years old.
}

// +++++++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }