
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById("id") selects a single element by its unique ID.
getElementsByClassName("class") selects all elements with a specific class, returning a live HTMLCollection.
querySelector("selector") selects the first element that matches any CSS selector.
querySelectorAll("selector") selects all elements matching a CSS selector, returning a static NodeList.

2. How to create and insert a new element into the DOM?
First, create the element using document.createElement("tag").
Then, set its content or attributes using properties like textContent, innerHTML, or className.
Finally, insert it into the DOM using methods like appendChild, prepend, or insertBefore.

3. What is Event Bubbling and how does it work?
Event Bubbling is when an event on a child element first triggers on that element and then propagates up through its parent elements. Each ancestor can also respond to the same event unless propagation is stopped.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where a parent element handles events for its child elements. It is useful because it allows you to manage many child elements with a single listener and also works for dynamically added elements.

5. Difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default behavior of an element, like preventing a link from navigating or a form from submitting.
stopPropagation() stops the event from bubbling up to parent elements, so ancestor event listeners do not get triggered.