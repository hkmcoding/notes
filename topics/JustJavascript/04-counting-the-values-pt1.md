# Counting the Values (Part 1)

# Studying JavaScript from the Inside

During these modules, we will learn about the JavaScript world for what it is - without thinking about how it's implemented. Similar to how physicists can talk about the properties of stars without answering the question whether the physical world is real.

<b>The foundation of our mental model is that our world is full of values.</b> Each value belongs to one of a few built-in types. Variables are "wires" that point from names in our code to values.

# Undefined

<b>There is only one value of that - ```undefined```.</b> In JavaScript, it represents the concept of an <i>unintentionally</i> missing value. 

# Null

<b>Similar to undefined, ```null``` is the only value of it's own type.</b> Null is used for <i>intentionally</i> missing values. 

# Booleans

There are only two boolean values, true and false. They are used to perform logical operations.

```
let isSad = true
let isHappy = !isSad
let isFeeling = isSad || isHappy // Is at least one of them true?
let isConfusing = isSad && isHappy // Are both true?
```

My answer: isFeeling will evaluate to true, isConfusing will evaluate to false

# Numbers

It is important to note that JavaScript doesn't use standard math. It uses floating point math. Unless you work on finance apps, you most likely won't need to worry about this. 

Floating math also includes a few special numbers that you should know. They are ```Nan, Infinity, -Infinity, and  -0```.

<b>There is only one value for each floating point math number</b>. Look at the following example and think back to our visual models.

```
let a = 4
let b = 2 + 2
```

In our diagram, variables a and b will be pointing to the same four. This is important to keep in mind for our mental model.