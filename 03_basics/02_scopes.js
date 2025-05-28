// concepts of scopes in JavaScript
// Scopes in JavaScript define the accessibility of variables, functions, and objects in some particular part of your code during runtime.

// There are two main types of scopes in JavaScript: global scope and local scope (function scope).
// Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

let globalVar = "I am a global variable"; // Global scope
function localScopeExample() {
    let localVar = "I am a local variable"; // Local scope
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}

localScopeExample(); // Calling the function to see the output
// console.log(localVar); // This will throw an error because localVar is not defined in the global scope   
// console.log(globalVar); // This will log the global variable
// Block scope: Variables declared with let or const inside a block (e.g., if statement, loop) are only accessible within that block.

if (true) {
    let blockVar = "I am a block variable"; // Block scope
    console.log(blockVar); // Accessing block variable
}
// console.log(blockVar); // This will throw an error because blockVar is not defined outside the block


// var scope: Variables declared with var are function scoped or globally scoped, meaning they can be accessed outside the block they are defined in, unlike let and const.
var a = 10; // var is function scoped or globally scoped

if (true) {
    var a = 20; // This will change the value of a in the global scope
    console.log(a); // Logs 20
}

console.log(a); // Logs 20, because var is function scoped or globally scoped


//++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declaration vs Function expression

// when you call a function before its declaration, it works for function declarations but not for function expressions due to hoisting.
console.log(addone(5))

function addone(num){ // function declaration , this will work because function declaration is hoisted
    return num + 1
}


// when you call a function before its declaration, it will throw an error for function expressions.
addTwo(5)
const addTwo = function(num){ // function expression , this will throw an error because function expression is not hoisted
    return num + 2
}