### Event Delegation

The idea of event delegation is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them - we put a single handler on their common ancestor.

You can use ```event.target``` to get the clicked element.

What are the benefits of event delegation?

- We don't need to write the code to assign a handler to each button. Just make a method and put it in the markup.
- THe HTML structure is flexible, we can add/remove buttons at any time

