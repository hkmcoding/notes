# 02. The JavaScript Universe

<b>A value is a thing in the JavaScript universe.</b> In our mental model imagine your code as a small asteroid in the sky. Around the asteroid is objects and functions. Even further out is primitive values.  

![The Javascript Universe](./images/javascriptuniverse.png)

### Primitive Values

Primitive values are numbers and strings, among other things. All primitive values have something in common. <b>There is nothing you cana do in your code that would affect them.</b> 

- <b>Undefined</b> (undefined), used for unintentionally missing values
- <b>Null</b> (null), used for intentionally missing values
- <b>Booleans</b> (true and false), used for logical operation
- <b>Numbers</b> (-100, 3.14, aand others), used for math calculations
- <b>Strings</b> ('hello', 'test'), used for text
- <b>Symbols</b> (uncommon), used to hide implementation details
- <b>BigInts</b> (uncommon and new), used for math on big numbers

### Objects and Functions

Objects and functions are also values, but they are not primitive values. <b>Objects and functions can be manipulated from our code</b>. If primitive values are like stars, then objects and functions are like rocks floating around our asteroid.

- <b>Objects</b> ({} and others), used to group related data and code
- <b>Functions</b> (x => x * 2 and others), used to refer to code

### Expressions

<b>Expressions are questions that JavaScript can answer. JavaScript answers expressions in the only way it knows how - with values.</b> Think of an "expression" as a piece of code that <i>expresses</i> a value. <b>Expressions always result in a single value.</b>.

### Checking a Type

To check the type of a value, use the ```typeof``` operator. JavaScript will answer our question with one of the predetermined string values, such as "number", "string", or "object".

### No Other Types

<b>In JavaScript, there are no other fundamental value types other than the ones we have just enumerated.</b> The rest are all objects. 



