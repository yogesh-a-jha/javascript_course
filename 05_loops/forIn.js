// concept of for...in loop

// Example of for...in loop in JavaScript
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: Alice, age: 30, city: New York
}

// The for...in loop iterates over the enumerable properties of an object.
// It provides a way to access each property key and its corresponding value.
// Note: The order of properties in an object is not guaranteed, so the output may vary.

// Example with an array
const numbers = [10, 20, 30, 40, 50];   
for (const index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`); // Output: Index 0: 10, Index 1: 20, etc.
}
// The for...in loop can also be used with arrays, but it's generally recommended to use for...of or traditional for loops for arrays.

//+++++++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }