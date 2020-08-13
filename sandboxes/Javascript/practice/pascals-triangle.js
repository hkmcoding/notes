var generate = function (numRows) {
  let triangle = [[1], [1, 1]]

  if (numRows === 0) {
    return []
  } else if(numRows === 1) {
    return [[1]]
  } else if(numRows === 2) {
    return [[1], [1, 1]]
  } else {
    for(let i = 2; i < numRows; i++) {
      addRow(triangle)
    }
  }
  return triangle
}

var addRow = function (triangle) {
  // Get previous
  let previous = triangle[triangle.length - 1]
  // Because each row starts with 1
  let newRow = [1]
  // Perform calculations
  for(let i = 0; i < previous.length - 1; i++) {
    let current = previous[i]
    let next = previous[i + 1]
    newRow.push(current + next)
  }
  // Because each row ends with 1
  newRow.push(1)
  return triangle.push(newRow)
}

console.log(generate(5))