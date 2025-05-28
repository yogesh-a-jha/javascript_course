// concepts of objects in JavaScript
// Objects in JavaScript are used to store collections of data and more complex entities.
// They are dynamic, meaning you can add or remove properties at any time.

// Declaration of objects
let obj1 = { 
    name: "Yogesh", 
    age: 22 
}; // using object literal syntax


let obj2 = new Object(); // using Object constructor

obj2.name = "Hitesh"; // adding properties to obj2
obj2.age = 23; // adding another property to obj2


// Accessing object properties

console.log(obj1.name); // accessing property using dot notation output: "Yogesh"
console.log(obj2["age"]); // accessing property using bracket notation output: 23
console.log(obj1["name"]); // accessing property using bracket notation output: "Yogesh"
console.log(obj2.name); // accessing property using dot notation output: "Hitesh"

// Modifying object properties
obj1.age = 23; // changing age property of obj1
console.log(obj1.age); // output: 23
obj2.name = "John"; // changing name property of obj2
console.log(obj2.name); // output: "John"

// Adding new properties to an object
obj1.city = "New York"; // adding new property to obj1
console.log(obj1.city); // output: "New York"
obj2.country = "USA"; // adding new property to obj2
console.log(obj2.country); // output: "USA"

// Removing properties from an object
delete obj1.age; // removing age property from obj1
console.log(obj1.age); // output: undefined (property removed)
delete obj2["country"]; // removing country property from obj2
console.log(obj2.country); // output: undefined (property removed)

// Iterating over an object
for (let key in obj1) {
    console.log(`${key}: ${obj1[key]}`); // output: name: Yogesh, city: New York
}   

for (let key in obj2) {
    console.log(`${key}: ${obj2[key]}`); // output: name: John, age: 23
}

// Object methods
console.log(Object.keys(obj1)); // getting keys of obj1 output: ["name", "city"]
console.log(Object.values(obj2)); // getting values of obj2 output: ["John", 23]
console.log(Object.entries(obj1)); // getting key-value pairs of obj1 output: [["name", "Yogesh"], ["city", "New York"]]    
console.log(Object.hasOwn(obj1, "name")); // checking if obj1 has property "name" output: true
console.log(Object.hasOwn(obj2, "country")); // checking if obj2 has property "country" output: false

// Object freezing and sealing
Object.freeze(obj1); // freezing obj1, preventing any changes
console.log(obj1); // output: { name: "Yogesh", city: "New York" }
Object.seal(obj2); // sealing obj2, preventing addition or removal of properties
console.log(obj2); // output: { name: "John", age: 23 }

// Object constructor function
function Person(name, age) {
    this.name = name; // setting name property
    this.age = age; // setting age property
}

// Creating an instance of Person
let person1 = new Person("Alice", 30); // creating a new Person object
console.log(person1.name); // output: "Alice"
console.log(person1.age); // output: 30
console.log(person1); // output: Person { name: 'Alice', age: 30 }

let person2 = new Person("Bob", 25); // creating another Person object
console.log(person2); // output: Person { name: 'Bob', age: 25 }

// Object destructuring
let { name, age } = obj1; // destructuring properties from obj1
console.log(name); // output: "Yogesh"
console.log(age); // output: undefined (age property was removed)

// Object methods functions
obj1.greeting = function() { // adding a method to obj1
    console.log(`Hello, my name is ${this.name}`);
}

obj1.greeting(); // calling the method output: "Hello, my name is Yogesh"

// object combining
let obj3 = { ...obj1, ...obj2 }; // combining obj1 and obj2 using spread operator
console.log(obj3); // output: { name: "John", city: "New York", age: 23 }


//++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++++++++++

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
