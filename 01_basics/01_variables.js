const accountId = 1234567890;// This is a constant variable, its value cannot be changed
let accountEmail = "yogesh@gmail.com";// This is a variable, its value can be changed
var accountPassword = "1234567890";// This is a variable, its value can be changed
accountCity = "Delhi"; // This is a variable, its value can be changed
let accountState; //This is a variable, its value is undefined

console.log(accountId);// This will print the value of accountId
console.log(accountEmail);// This will print the value of accountEmail
console.log(accountPassword);// This will print the value of accountPassword
console.log(accountCity); // This will print the value of accountCity

// accountId = 9876543210; // This will throw an error because accountId is a constant
accountEmail = "yogeshjha@gmail.com"; // This will change the value of accountEmail
accountPassword = "0987654321"; // This will change the value of accountPassword
accountCity = "Mumbai"; // This will change the value of accountCity



//dont use var, use let or const instead

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);// This will print the values in a table format