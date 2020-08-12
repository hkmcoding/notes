const removeFirstTwo = (list) => {
  const [, , ...arr] = list
  return arr
}

console.log(removeFirstTwo([0, 1, 2, 3, 4, 5]))