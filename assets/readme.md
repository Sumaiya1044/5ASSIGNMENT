
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById selects a single element using its unique ID. getElementsByClassName selects all elements with the same class name and returns a live collection. querySelector uses CSS selectors to return the first matching element, while querySelectorAll returns all matching elements as a static NodeList.


2. How to create and insert a new element into the DOM?
To create and insert a new element into the DOM, first use document.createElement() to create the element, then add content or attributes to it, and finally insert it into the document using methods like appendChild() or append().

3. What is Event Bubbling and how does it work?
Event bubbling is a JavaScript event propagation mechanism where an event starts from the target element and then moves upward through its parent elements to the root of the DOM. When an event occurs on a child element, its event handler runs first, followed by the handlers of its parent, grandparent, and so on, unless the propagation is stopped.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a JavaScript technique where a single event listener is attached to a parent element instead of multiple child elements, and events are handled based on the event’s target as they bubble up. It is useful because it improves performance, reduces memory usage, and allows handling events for dynamically added elements.

5. Difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser’s default action for an event (such as submitting a form or opening a link), while stopPropagation() stops the event from bubbling up or capturing through the DOM, preventing parent elements from receiving the event.