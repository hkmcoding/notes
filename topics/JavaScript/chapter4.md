# Chapter 4 - Data Structures: Objects and Arrays
- Objects allow us to group values - including other objects to build more complex structures
## Data Sets
- An array is a data type specifically for storing sequences of values
```
let array = [1, 2, 3, 4, 5]
```
## Properties
- myString.length is an example of a property
- In the above example, we are trying to access the length property of myString
- The two ways to access properties in JS are with either bracket notation or dot notation
- When using dot notation, the word following the dot is the literal name of the property
- When using bracket notation, the expression between the brackets is evaluated to get the property name
- Dot notation only works with names that look like valid binding names
> for example, you cannot do myArray.2, you must do myArray\[2]

## Methods
- Properties that contain functions are generally called *methods* of the value they belong to, as in "toUpperCase is a method of a string"
- Some examples of string methods are *toUpperCase* and *toLowerCase*
- Some examples of array methods are *push* and *pop*
- The push method adds values to the end of an array
- The pop method removes the last value in the array and returns it
- A stack is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first

## Objects
- Values of the type object are arbitrary collections of properties
- One way to create an object is by using braces as an expression
- Properties whose names aren't valid binding names or valid numbers have to be quoted
- It is possible to assign a value to a property expression with the = operator
- Using the = operator will replace the property's value if it already existed or create a new property on the object if it didn't
- The *delete* operator is a unary operator that, when applied to an object property, will remove the named property from the object. *This is not a common thing to do, but it is possible*
```
delete myObject.propertyName
```
- The binary *in* operator, when applied to a string and an object, tells you whether that object has a property with that name
```
console.log("propertyName" in myObject)
// -> true or false
```
- To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings - the object's property names
```
console.log(Object.keys({x: 0, y: 0, z: 0}))
// -> ["x", "y", "z"]
```
- There's also an *Object.assign* function that copies all properties from one object into another
- Arrays are just a kind of object specialized for storing sequences of things
- If you evaluate ```typeof []``` it produces "object"

## Mutability
- The types of values discussed previously, such as numbers, strings, and Boleans, are all *immutable*, it is impossible to change values of those types
- You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same, the text inside cannot be changed
> If you have a string that contians "cat", it is not possible for other code to change a character in your string to make it spell "rat"
- Objects work differnetly, you can change their properties, causing a single object value to have different content at different times
- With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties
```
let object1 = {value: 10}
let object2 = object1
let object3 = {value: 10}

console.log(object1 == object2) // true
console.log(object1 == object3) // false

object1.value = 15
console.log(object2.value) // 15
```
- The object1 and object2 bindings grasp the *same* object, which is why changing object1 also changes the value of object2
- They are said to have the same *identity*
- You can use a let binding to keep track of a changing number by changing the value the binding points at, similarly though a const bdingint o an object can itself not be changed and will continue to point at the same object, *the contents of that object might change*
```
let myObject = {value: 10}
let testBinding = myObject
console.log(testBinding.value)
myObject.value = 20
console.log(testBinding.value)
// 10
// 20
```
```
const score = {visitors: 0, home: 0}
score.visitors = 1
```

## Brace Notation Shorthand
- If a property name in brace notation isn't followed by a value, its value is taken from the binding with the same name
```
let journal = []
addEntry = entry => {
  journal.push({entry})
}
addEntry("test")
// [ { entry: 'test' } ]
```

## Array Methods
- Arrays have an ```includes``` method that checks whether a given value exists in an array
- ```Array.prototype.pop()``` - removes the last element from an array and returns that value to the caller
- ```Array.prototype.push()``` - adds new items to the end of an array and returns the new length
- ```Array.prototype.shift()``` - removes the first element from an array and returns that removed element
- ```Array.prototype.unshift()``` - adds one or more items or elements to the beginning of the array and returns the new length of the array
- ```Array.prototype.indexOf()``` - searches through the array from the start to finish and returns the index at which the requested value was found, or -1 if the value was not found
- There is also a similar method called ```lastIndexOf```, but it searches from the end of the array to the start
> Both ```indexOf``` and ```lastIndexOf``` take an optional second argument that indicates where to start searching
- ```Array.prototype.slice()``` - Takes start and end indices and returns an array that has only the elements between them
> The start index is inclusive and the end index is exclusive. When the end index is not given, ```slice``` will take all of the elements after the start index
- The ```concat``` method can be used to glue arrays together to create a new array, similar to what the + operator does for strings
> If you pass ```concat``` an argument that is not an array, that value will be added to the new array as if it were a one-element array

## Array Loops
- The following is an example of a very commonly used loop
```
for (let i = 0; i < array.length; i++) {
  let entry = array[i]
  // do something with entry
}
```
- This can be rewritten as:
```
for (let entry of array) {
  // do something with entry
}
```
- This works not only for arrays but also for strings and some other data structures

## Strings and their Properties
- The ```trim``` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string
- You can split a string on every occurrence of another string with ```split``` and join it again with ```join```
- A string can be repeated with the ```repeat``` method, which contains a new string containing multiple copies of the original string, glued together
```
console.log("LA".repeat(3))
// LALALA
```
- You can access a string's individual characters like you access array elements

## Rest Parameters
- When a function using a rest parameter is called, the rest parameter is bound to an array containing all further arguments
```
function max(...numbers) {

}
```
- You can use a similar three-dot notation to call a function with an array of arguments
- This spreads out the array into the function call, passing its elements as separate arguments

## The Math Object
- Math.max
- Math.min
- Math.random (returns a psuedo-random number between 0 and 1)
- Math.floor (rounds down to the nearest whole number)
- Math.ceil (rounds up to the nearest whole number)

## Destructuring
- Destructuring assignment makes it possible to unpack values from arrays, or properties from objects, into distinct variables
```
let {name} = {name: "Humza", age: 24}
console.log(name)
// Humza
```

## JSON
- JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from the JSON format
- ```JSON.stringify``` takes a JavaScript value and returns a JSON-encoded string
- ```JSON.parse``` takes a string and converts it to the value it encodes