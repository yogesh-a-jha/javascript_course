// relation in DOM

// IN dom , there are different types of relations between elements.
// 1. Parent-Child Relationship
// 2. Sibling Relationship
// 3. Ancestor-Descendant Relationship
// 4. Descendant Relationship
// 5. Adjacent Sibling Relationship
// 6. Non-Adjacent Sibling Relationship
// 7. Child Relationship
// 8. Parent Relationship

// explaining the relations in DOM using html elemtents 

// 1. Parent-Child Relationship
// The parent element is the direct container of the child element.

<body>
<div id="parent">
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
</div>
</body>

// In this example, the `<div id="parent">` is the parent element, and `<div class="child">` elements are its children.
// You can access the parent of a child element using `parentElement` or `parentNode` properties in JavaScript.
const child1 = document.querySelector('.child');
const parent = child1.parentElement; // or child1.parentNode
console.log(parent.id); // Output: parent

// 2. Sibling Relationship
// Sibling elements share the same parent element.

<body>
<div id="parent">
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
</div>
</body>

// In this example, `<div class="child">Child 1</div>` and `<div class="child">Child 2</div>` are siblings.
const child1 = document.querySelector('.child');
const child2 = child1.nextElementSibling; // Gets the next sibling element
console.log(child2.textContent); // Output: Child 2
// You can also access the previous sibling using `previousElementSibling` property.

// 3. Ancestor-Descendant Relationship
// An ancestor is any element that is higher in the hierarchy than the current element, while a descendant is any element that is lower in the hierarchy.

<body>  
<div id="grandparent">
    <div id="parent">
        <div class="child">Child 1</div>
    </div>
</div>
</body>

// In this example, `<div id="grandparent">` is an ancestor of `<div class="child">Child 1</div>`, and `<div class="child">Child 1</div>` is a descendant of `<div id="grandparent">`.
const child1 = document.querySelector('.child');
const grandparent = child1.closest('#grandparent'); // Gets the closest ancestor with the specified selector    
console.log(grandparent.id); // Output: grandparent
// You can use the `closest` method to find the nearest ancestor that matches a given selector.

// 4. Descendant Relationship
// A descendant is any element that is nested within another element, regardless of how many levels deep it is.