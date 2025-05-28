// concepts of iife (Immediately Invoked Function Expression)
// IIFE is a function that runs as soon as it is defined.


(function() {
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();
// This function is executed immediately after it is defined, without needing to be called explicitly.

// IIFE is often used to create a private scope, avoiding polluting the global namespace.
// It can also be used to execute code that needs to run only once, such as initialization code or setup tasks.


// IIFE can also accept parameters, allowing you to pass values into the function at the time of invocation.
(function(name) {
    console.log(`Hello, ${name}! This is another IIFE.`);
})("Yogesh");
// This IIFE takes a parameter `name` and logs a greeting message using that parameter.



// using arrow function syntax for IIFE
(() => {
    console.log("This is an IIFE using arrow function syntax");
})();   

// This is an IIFE defined using arrow function syntax, which is a more concise way to write functions in JavaScript.

// taking parameters in arrow function IIFE
((name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
})("Yogesh", 22);