// concept of reduce in javascript
// reduce have two parameters, first is callback function and second is initial value
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  

console.log(sum); // Output: 15
// The reduce method iterates over the array and applies the callback function to each element, accumulating the result.
// The initial value (0 in this case) is used as the starting point for the accumulation.
// If no initial value is provided, the first element of the array is used as the initial accumulator value.

// Example with an array of objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
const totalAge = users.reduce((accumulator, user) => {
    return accumulator + user.age;
}, 0);

console.log(totalAge); // Output: 90
// The reduce method can also be used to transform an array of objects into a single value, such as the total age of all users.



// second example with an array of objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // Output: 24996