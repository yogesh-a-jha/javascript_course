// concepts of functions in JavaScript
// Functions in JavaScript are blocks of code designed to perform a particular task.
// They are executed when they are called or invoked.
// Functions can take parameters and return values.

// Declaration of functions
function greet() {
    console.log("Hello, World!");
}
// Function expression
const greetUser = function(name) {
    console.log(`Hello, ${name}!`);
};

// calling the functions
greet(); // output: Hello, World!
greetUser("Yogesh"); // output: Hello, Yogesh!
// Function with parameters and return value


// function to add two numbers
function addTwoNumbers(a, b) {
    return a + b;
}

let results = addTwoNumbers(5, 10); // output: 15
console.log(results); // output: 15

// Function for user login message
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){  // rest operator , when you don't know how many arguments will be passed
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



// passing object as an argument to a function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

        // handleObject(user)
        handleObject({ //for testing purpose
            username: "sam",
            price: 399
        })


// passing array as an argument to a function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));