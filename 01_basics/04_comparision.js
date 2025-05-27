// Comparison Operators in JavaScript
// Comparison operators are used to compare two values and return a boolean value (true or false).

console.log(2 > 1); // true, because 2 is greater than 1
console.log(2 >= 1); // true, because 2 is greater than or equal to 1
console.log(2 < 1); // false, because 2 is not less than 1
console.log(2 == 1); // false, because 2 is not equal to 1
console.log(2 != 1); // true, because 2 is not equal to 1

//when defferent types are compared, JavaScript converts them to numbers
console.log("2" > 1); // true, because "2" is converted to number 2
console.log("02" > 1); // true, because "02" is converted to number 2

// when comparing strings, JavaScript compares them lexicographically
console.log("a" > "A"); // true, because lowercase letters have higher code points than uppercase letters
console.log("2" < "12"); // false, because "2" is compared to "1" first, and "2" is greater than "1"
console.log("2" == 2); // true, because "2" is converted to number 2

//when comparing null and undefined, JavaScript treats them as equal
console.log(null == undefined); // true, because null and undefined are considered equal

console.log(null > 0); // false , because null is not a number
console.log(null == 0); // true , because == operator does type coercion
console.log(null >= 0); // true , because null is treated as 0 in comparisons

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// Strict equality and loose equality
console.log(2 === 2); // true, because both value and type are the same

console.log("2" === 2); // false, because the types are different (string vs number)
console.log("2" == 2); // true, because == operator does type coercion