
// what is dom(Document Object Model)?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of a webpage dynamically using JavaScript.
// The DOM provides a way to access and modify the elements of a webpage, such as HTML tags, attributes, and text content. It allows developers to create interactive and dynamic web applications by enabling them to change the document structure, style, and content in response to user actions or other events.

// documentSelectors

// methods to select elements in the DOM

// these are popular methods to select elements in the DOM:
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll
// 6. getElementsByName

// examples

// 1. getElementById
const elementById = document.getElementById('myElementId');
console.log(elementById); // Select
// Output: <div id="myElementId">Content</div>

// 2. getElementsByClassName
const elementsByClassName = document.getElementsByClassName('myClassName');
console.log(elementsByClassName); // Selects all elements with the class 'myClassName'
// Output: HTMLCollection(3) [div.myClassName, span.myClassName, p.myClassName]

// 3. getElementsByTagName
const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName); // Selects all <div> elements
// Output: HTMLCollection(5) [div#myElementId, div.myClassName, div, div, div]

// 4. querySelector
const firstElement = document.querySelector('.myClassName');
console.log(firstElement); // Selects the first element with the class 'myClassName'
// Output: <div class="myClassName">First Element</div>

// 5. querySelectorAll
const allElements = document.querySelectorAll('.myClassName');
console.log(allElements); // Selects all elements with the class 'myClassName'
// Output: NodeList(3) [div.myClassName, span.myClassName, p.myClassName]

// 6. getElementsByName
const elementsByName = document.getElementsByName('myElementName');
console.log(elementsByName); // Selects all elements with the name 'myElementName'
// Output: NodeList(2) [input[name="myElementName"], input[name="myElementName"]]

// Note:
// - `getElementById` => Selects a single element by its ID, Returns a single Element object.
// - `getElementsByClassName` and `getElementsByTagName` => Return a live HTMLCollection of elements.
// - `querySelector` => Selects the first matching element using CSS selectors.
// - `querySelectorAll` => Returns a static NodeList of all matching elements.
// - `getElementsByName` => Selects elements by their name attribute, returning a NodeList.

// Example HTML structure for the above selectors
/*
<div id="myElementId">Content</div>
<div class="myClassName">First Element</div>
<span class="myClassName">Second Element</span>
<p class="myClassName">Third Element</p>
<input type="text" name="myElementName" value="Input 1">
<input type="text" name="myElementName" value="Input 2">
*/


// Differences between HTMLCollection and NodeList:
// 1. HTMLCollection:
// - Live collection: HTMLCollection is a live collection, meaning it automatically updates when the document changes.
// - Returns elements: It only contains elements (e.g., `<div>`, `<span>`, etc.) and does not include text nodes or comments.
// - Methods: HTMLCollection has methods like `item(index)` to access elements by index, and it can be iterated using a for loop or forEach method in modern browsers.


// 2. NodeList:
// - Static collection: NodeList can be either live or static, depending on how it is created. For example, `querySelectorAll` returns a static NodeList that does not update when the document changes.
// - Returns nodes: NodeList can contain any type of node, including elements, text nodes, and comments.
// - Methods: NodeList has a forEach method that allows iteration over its items, but it does not have methods like `item(index)`.




