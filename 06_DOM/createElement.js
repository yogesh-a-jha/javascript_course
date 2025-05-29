// concepts of createElement in javascript
// The createElement method is used to create a new HTML element in the DOM.

// It allows developers to dynamically create elements, set their attributes, and append them to the document.


// Example of createElement in JavaScript
const newDiv = document.createElement('div'); // Create a new <div> element
newDiv.id = 'myNewDiv'; // Set the id attribute
newDiv.className = 'myClass'; // Set the class attribute
newDiv.textContent = 'Hello, World!'; // Set the text content
document.body.appendChild(newDiv); // Append the new element to the body of the document
// Output: A new <div> element with id 'myNewDiv', class 'myClass', and text content 'Hello, World!' is added to the body of the document.



//+++++++++++++++++++++++++++++++++++++++caccourse++++++++++++++++++++++++++++++++++++++
const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Chai aur code"
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)

document.body.appendChild(div)