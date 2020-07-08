# Counting the Values (Part 2)

# BigInts

Regular numbers can't represent large integers with percision, so BigInts fill that gap. 
```
let alot = 90071992452352352n
```
In our JavaScript universe, there is an infinite number of BigInts - one for each integer in math.

# Strings

Strings represent text in JavaScript. Strings have built in properties but that doesn't mean that they are objects. <b>In our universe, there is a distinct value for every conceivable string. To keep our model simple, we will say that all conceivable string values already exist from the beginning - one value for each distinct string</b>. 

# Symbols

Symbols are a relatively recent addition to the language. 

```
let alohomora = Symbol()
```

(They were skipped in this module)

# Objects

Make sure to remember that this includes arrays, dates, RegExps, and other non-primitive values. Objects are not primitive and we can access their values using dot or bracket notation. <b>What makes objects different is that we <i>can</i> create more of them. With the primitive values, they have "always existed".</b> The same goes for arrays, dates, and any other objects. For example, the [] array literal creates a new array value - a value that never existed before.

You can't destroy an object, instead, JavaScript is a garbage-collected language. This means that although we can't destory and object, it might eventually "dissapear" if there is no way to reach it by following the wires in our code.

<b><i>In our universe, objects and functions float closest to our code. This reminds us that we can manipulate them and even make more of them</b></i>.

# Functions

```
for (let i = 0; i < 7; i++) {
  console.log(2)
}
```

How many different values does it pass to console.log? It passes one value. Numbers are primitive values so here the same value for the number 2 is "summoned" every time.

```
for (let i = 0; i < 7; i++) {
  console.log({})
}
```

How many different values does it pass to console.log now? It passes seven values. Object literals create a new object value so seven values will be created from the code above.

```
for (let i = 0; i < 7; i++) {
  console.log(function() {})
}
```

Question: how many different values does this code pass to console.log?  
Answer: Seven

<b>Every time we execute a line of code that contains a function expression, a brand new function value appears in our universe.</b>

```
let countDwarves = function() { return 7 }
let dwarves = countDwarves
console.log(dwarves)
```

You might think that it prints 7 but we never called our function. The console.log will show the function itself. <b>Functions are values. We can point variables to them, just like we can do with numbers or objects.</b>

