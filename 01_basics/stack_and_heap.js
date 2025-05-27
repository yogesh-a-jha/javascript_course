// Two types of memory allocation in JavaScript: stack and heap

// Stack: Used for primitive data types (e.g., numbers, strings, booleans).
let c = 10; // Stored in stack
let d = "Hello"; // Stored in stack


// Heap: Used for non-primitive data types (e.g., objects, arrays).
let obj = {
    name: "Yogesh",
    age: 22
}; // Stored in heap

let arr = [1, 2, 3, 4, 5]; // Stored in heap

//Note: Functions are also objects in JavaScript, so they are stored in the heap.

//operations on stack and heap

//stack operations

let a = 5; // a is stored in stack
let b = a; // b is a copy of a, stored in stack

b = 10; // changing b does not affect a
console.log(a); // 5
console.log(b); // 10

//heap operations

let obj1 = { name: "Yogesh" }; // obj1 is stored in heap
let obj2 = obj1; // obj2 is a reference to obj1, both point to the same object in heap

obj2.name = "Hitesh"; // changing obj2 affects obj1
console.log(obj1.name); // "Hitesh"
console.log(obj2.name); // "Hitesh"
// Note: In JavaScript, objects and arrays are reference types, meaning they are stored in the heap and accessed by reference.