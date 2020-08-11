### Prototypes

```
let human = {
  teeth: 32
};

let gwen = {
  // We added this line:
  __proto__: human,
  age: 19
};
```

What is that mysterious _proto_ property?

By specifying proto, also known as our object's prototype, we instruct JavaScript to continue looking for missing properties on that object instead. <b>With proto, you instruct JavaScript to "ask another object".</b>

```
let human = {
  teeth: 32
};

let gwen = {
  __proto__: human,
  age: 19
};

console.log(human.age); // ?
console.log(gwen.age); // ?

console.log(human.teeth); // ?
console.log(gwen.teeth); // ?

console.log(human.tail); // ?
console.log(gwen.tail); // ?
```

Answers: undefined, 19, 32, 32, undefined, undefined  
My answers were all correct

If you ever want to check if an object has its own property wire with a certain name, you can call a built-in function called ```hasOwnProperty```. 

When reading obj.prop, if obj doesn’t have a prop property, JavaScript will look for obj.__proto__.prop, then it will look for obj.__proto__.__proto__.prop, and so on, until it either finds our property or reaches the end of the prototype chain.

When writing to obj.prop, JavaScript will usually write to the object directly instead of traversing the prototype chain.

We can use obj.hasOwnProperty('prop') to determine whether our object has an own property called prop. In other words, it means there is a property wire called prop attached to that object directly.

We can “pollute” a prototype shared by many objects by mutating it. We can even do this to the Object Prototype — the default prototype for {} objects! But we shouldn’t do that unless we’re pranking our colleagues.

You probably won’t use prototypes much directly in practice. However, they are fundamental to how JavaScript objects work, so it is handy to understand their underlying mechanics. Some advanced JavaScript features, including classes, can be expressed in terms of prototypes.