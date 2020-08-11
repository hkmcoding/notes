// Remove the first two elements of an array using array destructuring

const removeFirstTwo = (list) => {
  const [, , ...arr] = list
  return arr
}

let arrLiteral = [1, 2, 3, 4, 5]
console.log(removeFirstTwo(arrLiteral))