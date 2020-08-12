// Initialization
testVariable = 'Hello world'
console.log(testVariable)

// Declaration
var testVariable
testFunction()

// Declaration - function declaration
function testFunction () {
  console.log('Hello world, from the function!')
}

// Expression - function expression
var testFunctionTwo = function () {
  console.log('Hello world, from the function expression!')
}

testFunctionTwo()

// In short, use function declarations when you want to create a function on the global scope. Use function expressions to limit where the function is available.