# Chapter 4 - Data Structures: Objects and Arrays
- Objects allow us to group values - including other objects to build more complex structures
## Data Sets
- An array is a data type specifically for storing sequences of values
```
let array = [1, 2, 3, 4, 5]
```
- 
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
- There's also an *Object.assign* function that copies alll properties from one object into another
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
