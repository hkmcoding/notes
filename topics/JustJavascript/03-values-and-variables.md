# 03. Values and Variables

```
let reaction = 'yikes'
reaction[0] = 'l'
console.log(reaction)
```

What do you expect the code to do? 

Answer: It will either log "yikes" or error out, depending on whether you are in strict mode. <b>It will never print "likes".</b>

# Primitive Values Are Immutable

All primitive values are immutable. Immutable means that it is read-only, or unchangeable. In our JavaScript model, all primitive values exist in the outer circle further from my code - like distant stars (remember the image  from [The Javascript Universe](./02-the-javascript-universe.md)). So if primitive values are immutable, what will happen in the following block of code?

```
let pet = 'Narwhal'
pet = 'The Kraken'
console.log(pet)
```

Answer: It will log 'The Kraken'. This is because we aren't changing the primitive value, but we are changing where "pet" is pointing to.

We can't change string values because they are primitive. All we are doing is changing the variable. <b>Variables are wires. Variables are not values, they <i>point to values</i>.</b> A wire has two directions. It starts at a name in our code and it ends pointing at some value in our universe. 

<b>The left side of an assignment must be a "wire".</b>

<b>The right side of an assignment must be an expression (an expression that JavaScript can answer). Values like 'The Kraken' and 2 are also expressions called <i>literals</i>.</b>

# Nouns and Verbs

You cannot pass a variable to a function.

```
function double(x) {
  x = x * 2
}

let money = 10
double(money)
console.log(money) // ?
```

If we were able to pass variables to a function, then we should be able to get the value of 20 when console logging money.

# Wrapping it up

```
let x = 10
let y = x
let x = 0
```

Here, y will equal to 10 and x will equal to 0. The y variable does not point to the x variable. It points to the value the x variable was pointing to at that time. <b>Variables always point at values.</b>