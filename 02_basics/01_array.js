//concepts of arrays in JavaScript
// Arrays in JavaScript are used to store multiple values in a single variable.

// They are dynamic, meaning they can grow and shrink in size as needed.

// Declaration of arrays
let arr1 = [1, 2, 3, 4, 5]; // using array literal syntax
let arr2 = new Array(6, 7, 8, 9, 10); // using Array constructor
let arr3 = []; // empty array

// Accessing array elements
console.log(arr1[0]); // accessing first element output: 1
console.log(arr2[1]); // accessing second element output: 7
console.log(arr3.length); // length of the array output: 0
console.log(arr1.length); // length of arr1 output: 5
console.log(arr2.length); // length of arr2 output: 5
console.log(arr1[arr1.length - 1]); // accessing last element output: 5

// Modifying array elements
arr1[0] = 10; // changing first element
console.log(arr1); // output: [10, 2, 3, 4, 5]
arr2[1] = 20; // changing second element
console.log(arr2); // output: [6, 20, 8, 9, 10]

// Adding elements to an array
arr3.push(1); // adding element to the end
arr3.push(2, 3); // adding multiple elements to the end
console.log(arr3); // output: [1, 2, 3]
arr1.unshift(0); // adding element to the beginning
console.log(arr1); // output: [0, 10, 2, 3, 4, 5]

// Removing elements from an array
arr2.pop(); // removing last element
console.log(arr2); // output: [6, 20, 8, 9]
arr1.shift(); // removing first element
console.log(arr1); // output: [10, 2, 3, 4, 5]

// Iterating over an array
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); // output: 10, 2, 3, 4, 5
}

arr2.forEach((element) => {
    console.log(element); // output: 6, 20, 8, 9
});

// Array methods
console.log(arr1.includes(2)); // checking if array includes an element output: true
console.log(arr2.indexOf(20)); // finding index of an element output: 1
console.log(arr1.join(", ")); // joining array elements into a string output: "10, 2, 3, 4, 5"
console.log(arr1.slice(1, 3)); // slicing an array output: [2, 3] (elements from index 1 to 2)
console.log(arr1.splice(1, 3)); // removing elements from an array output: [2, 3, 4] and modifies arr1 to [10, 5]
console.log(arr1.concat(arr2)); // concatenating two arrays output: [10, 2, 3, 4, 5, 6, 20, 8, 9]

// Sorting an array
arr1.sort((a, b) => a - b); // sorting in ascending order
console.log(arr1); // output: [2, 3, 4, 5, 10]

// Reversing an array
arr2.reverse(); // reversing the array
console.log(arr2); // output: [9, 8, 20, 6]

// Finding the length of an array
console.log(arr1.length); // output: 5
console.log(arr2.length); // output: 4

// Checking if a variable is an array
console.log(Array.isArray(arr1)); // checking if arr1 is an array output: true



// +++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++


// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

