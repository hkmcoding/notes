# Chapter 3 - Functions
## Defining a Function
- A function definition is a regular binding where the value of the binding is a function
- For example, the following code defines *square* to refer to a function that produces the square of a given number
```
const square = function(x) {
  return x * x
}
```
- Functions have a set of parameters and a body
- The body contains the statements that are to be executed when the function is called

## Bindings and Scopes
- Each binding has a scope, which is the part of the program in which the binding is visible
- For bindings defined outside of any function or block, the scope is the whole program. You can refer to these bindings wherever you want. Thesse are called *global*
- Bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as *local* bindings
- Bindings declared with *let* or *const* are local to the block they are declared in
- Each scope can also "look out" into the scope around it
- Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope, this approach to binding is called *lexical scoping*

## Declaration Notation
- Previously we were using functions as values, but functions can also be written like so:
```
function square(x) {
  return x * x
}
```
- This is *function declaration* 
- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope

## Arrow Functions
```
const square = x => {
  return x * x
}
```

## Optional Arguments and Default Values
- JavaScript is extremely broad-minded about the number of arguments you pass to a function
- If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given
```
function power(base, exponent = 2) { }
```

## Closure
- Closure is being able to reference a specific instance of a local binding in an enclosing scope
```
function multiplier(factor) {
  return number => number * factor
}

let twice = multiplier(2)
console.log(twice(5))
// -> 10
```
- In this example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when twice is called, it multiplies the argument by 2.

## Recursion
- A function that calls itself is a recursive function
```
let isEven = x => {
  if(x === 0) return 'even'
  else if(x === 1 || x === -1) return 'odd'
  else if(x < 0) return isEven(x + 2)
  else return isEven(x - 2)
}

console.log(isEven(-50))
```
- The following function takes a number and determines wether the argument is even or odd by calling itself until one of the base cases is hit. If x will eventually return 0, the number is even. If it returns 1, it is odd.

## Pure Functions
- A *pure* function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effects from other code - for example, it doesn't read global bindings whose value might change
- A side effect is any application state change that is observable outside the called function other than its return value
- Side effects include: modifying any external variable, calling other functions with side effects, etc