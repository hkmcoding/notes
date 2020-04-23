# Chapter 2 - Program Structure
### Expressions and Statements
- A fragment of code that produces a value is called an *expression*
- If an expression corresponds to a sentence fragment, a *statement* corresponds to a full sentence

### Bindings
- JavaScript uses *bindings*, or *variables* to catch and hold values
> let caught = 5 * 5 creates a variable called caught
- If you ask for the value of an empty binding, you'll get the value undefined
- Binding names can not share names with keywords (let, const, etc)
- The collection of bindings and their values that exist at a given time is called the *environment*

### Functions
- A function is a piece of program wrapped in a value
- Executing a function is calling invoking, calling, or applying it
- Values given to functions are called *arguments*
- When a function produces a value, it is said to *return* that value
- Anything that produces a value is an expression in JavaScript
> Examples: Number, String, and Boolean are all example functions  
> Number.isNaN

### While and Do Loops
- A do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution
```
  let yourName  
  do {
    yourName = prompt("Who are you?")
  } while (!yourName)
  console.log(yourName)
```
> The following code will ask you for your name once, and will keep asking you until a name is provided

### For Loops
- The first part of a for loop initializes the loop
- The second part is the conditional
- The third part is the iteration 
```
for(let i = 0; i < 5; i++)
```

### Breaking out of a loop
- The *break* keyword has the effect of immediately jumping out of the enclosing loop
- The *continue* keyword is similar in that it influences the progress of a loop. When continue is in the loop body, control jumps out of the body and continues with the loop's next iteration

### Switches
```
switch (prompt("What is the weather like?")) {
  case: "rainy":
    console.log("Bring an umbrella")
    break
  case: "sunny":
    console.log("Wear a t-shirt")
    break
  default:
    console.log("Unknown weather")
    break
}
```

