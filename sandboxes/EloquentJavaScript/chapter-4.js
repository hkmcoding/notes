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

// 3. A List
arrayToList = array => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list
}

listToArray = list => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

prepend = (value, rest) => {
  let list = null;
  list = {value, rest}
  return list
}

nth = (list, index) => {
  let count = 0
  for (let node = list; node; node = node.rest) {
    if(count === index) {
      return node.value
    } else {
      count++
    }
  }
}

nthRecursive = (list, n) => {
  // Goes through the beginning of the list calling itself using list.rest until n = 0, then it returns the value
  if (!list) return undefined
  else if (n == 0) return list.value
  else return nth(list.rest, n - 1)
}

console.log(arrayToList([10, 20, 30]))
// console.log(listToArray(arrayToList([10, 20, 30])))
// console.log(prepend(10,prepend(20, null)))
console.log(nthRecursive(arrayToList([10, 20, 30]), 2))

