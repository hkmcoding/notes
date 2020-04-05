## Chapter 1 - Values, Types, and Operators
### Numbers:
- Examples: 1, 13, 200
- Also called integers
- Operators like +, *, /, % are used to perform arithmetic operations on numbers
- Without parentheseses, operators execute in order of precedence (think PEMDAS)
- The % operator, remainder operator or *modulo*, returns the remainder of diving two numbers
> X % Y will return the remainder of X / Y
- There are also three special numbers used by JavaScript: *Infinity*, *-Infinity*, and *NaN (not a number)*

### Strings:
- Example: "Hello world!"
- Strings are used to represent text using either single quotes, double quotes, or backticks
- Whenever a backslash ( \\ ) is found inside quoted text, it indicates that the character after has a special meaning. This is called *escaping* the character
> "This is the first line \n This is the second line" 

### Operators
- Not all operators are symbols, for example the *typeof* operator. The typeof value returns the value of a variable as a string
- Operators that use one value are called *unary operators*
- Operators that use two values are called *binary operators*
- Operators that use three values are called *terenary operators*
- Logical operators: and (&&), or (||), and not (!)
- The terenary operator (also sometimes called conditional operator because it is the only terenary operator), (?:) "picks" one of the values depending on the conditional
> ture ? 1 : 2 will return 1  
> false ? 1 : 2 will return 2

### Booleans
- Example: true, false
- There is only one value in JS that is not equal to itself, NaN
- Booleans are often used with logical operators
> (true && false) results in false  
> (true || false) results in true

### Empty Values
- Example: null, undefined
- They are used to denote the absence of a meaningful value

### Type Coercion 
- Type Coercion is when JavaScript will convert your value for you depending on what you are trying to do
> "5" - 1 will return 4 because JS converted the "5" to 5

### Short-circuiting of Logical operations
- The right part of logical operations is only evaluated when necessary 
- true || x will always return true
- false && x will always return false
- The conditional operator also works like this 