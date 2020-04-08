console.log(Math.max(1, 5, 3))
console.log(Math.min(9, 5, 3))
let myObject = {value: 10}
let testBinding = myObject
console.log(testBinding.value)
myObject.value = 20
console.log(testBinding.value)