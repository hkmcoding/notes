// 1. The Sum of a Range - My solution

let customRange = (start, end, step = 1) => {
  let results = []
  if (start <= end) {
    while (start <= end) {
      results.push(start)
      start += step
    }
  } else {
    while (start >= end) {
      results.push(start)
      start += step
    }
  }
  return results
}

let customSum = ([...numbers]) => {
  let total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}

console.log(customRange(5, 2, -1))
console.log(customSum(customRange(1, 10)))

// 2. Reversing an Array
let reverseArray = array => {
  let newArray = []
  for(let i = 0; i < array.length; i++) { 
    newArray.unshift(array[i])
  }
  return newArray
}

let reverseArrayInPlace = array => {
  for(let i = 0; i < array.length / 2; i++) {
    let tempVar = ''
    tempVar = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tempVar
  }
  return array
}

console.log(reverseArray([1, 3, 2]))
console.log(reverseArrayInPlace([1, 3, 2]))

