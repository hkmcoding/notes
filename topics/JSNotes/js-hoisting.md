### Hoisting

Conceptually, a strict definition of hoisting suggests that variable and function declarations are moved to the top of your code. This isn't what actually happens, but it can be a good way to remember hoisting.

```
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/
```

The above is possible because of hoisting. This is because of how context execution works in JavaScript.

#### Only declarations are hoisted

```
console.log(num)
var num; // declaration
num = 6; // initialization
```
