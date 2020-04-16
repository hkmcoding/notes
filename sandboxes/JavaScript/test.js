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