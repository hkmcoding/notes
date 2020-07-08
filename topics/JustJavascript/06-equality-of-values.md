# Equality of Values

In JavaScript, there are several different kinds of equality. There is strict equality ```===```, loose equality ```==```, and same value equality ```Object.is(a, b)```.

# Same Value Equality

```Object.is(a, b)``` tells us if a and b are the same value. 

```
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?
```

My original answer: false, false, true  
Answer: false (points at different values), false (point at different values), true (point at the same value)

But what about objects?

```
let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry)); // ?
console.log(Object.is(cherry, chocolate)); // ?
console.log(Object.is(chocolate, banana)); // ?
```

My original answer: false, false, true  
Answer: false, false, true (correct!)

# Strict Equality

```a === b```  

What is the difference between strict equality and same value equality? Thankfully, both work similarly to our mental mondal.

```
2 === 2 // true
{} === {} // false
```

But, there are two exceptions to the rule. <b>Nan === Nan is false</b>, although they are the same value. <b>-0 === 0 and 0 === -0 are true</b>, even though they are different values.

Other ways to check for NaN are: ```Number.isNaN(x), Object.is(x, NaN)```.

# Coding Exercise

Write a function called strictEquals(a, b) that returns the same value as a === b. Your implementation must not use the === or !== operators.

```
const strictEquals = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false
  } else if ((a == 0 && b == -0) || (a == -0 && b == 0)) {
    return true
  }
  return Object.is(a, b)
}
```

Review: I kind of cheated, I used loose equal before reviewing it!

Dan's answer:
```
// Like a === b
function strictEquals(a, b) {
  if (Object.is(a, b)) {
    // Same value.
    // Is this NaN?
    if (Object.is(a, NaN)) { // We already know a and b are the same, so it's enough to check a.
      // Special case #1.
      return false;
    } else {
      // They are equal!
      return true;
    }
  } else {
    // Different value.
    // Are these 0 and -0?
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      // Special case #2.
      return true;
    } else {
      // They are not equal!
      return false;
    }
  }
}
```

Re-doing my answer after reviewing the Loose Equality section
```
const strictEquals = (a, b) => {
  if (Number.isNaN(a)) {
    return false
  } else if ((Object.is(0, a) && Object.is(-0, b)) || (Object.is(-0, a) && Object.is(0, b))) {
    return true
  }
  return Object.is(a, b)
}
```

# Loose Equality

```a == b```.  
Loose Equality, or "abstract equality", is arcane and confusing. It's uncommon in modern codebases, and its rules don't play a larger role in the language - or in our mental model. 