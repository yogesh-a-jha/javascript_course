// concept of for...each loop

// forEach is a method available on arrays in JavaScript that allows you to iterate over each element in the array and execute a provided function once for each element.

// It is a more concise and readable way to loop through arrays compared to traditional for loops.

const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
    console.log(element); // Output: 1, 2, 3, 4, 5
});

// The forEach method takes a callback function as an argument, which is executed for each element in the array.
// The callback function can take up to three arguments: the current element, the index of the current element, and the array itself.
arr.forEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`); 
    // Output: Element: 1, Index: 0, Array: [1, 2, 3, 4, 5]
    // Element: 2, Index: 1, Array: [1, 2, 3, 4, 5]
    // Element: 3, Index: 2, Array: [1, 2, 3, 4, 5]
    // Element: 4, Index: 3, Array: [1, 2, 3, 4, 5]
    // Element: 5, Index: 4, Array: [1, 2, 3, 4, 5]
});

// Note: The forEach method does not return a new array; it simply executes the provided function for each element in the original array.

// Example with an array of objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];  

users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old.`); 
    // Output: Alice is 30 years old.
    // Output: Bob is 25 years old.
    // Output: Charlie is 35 years old.
});

// +++++++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )