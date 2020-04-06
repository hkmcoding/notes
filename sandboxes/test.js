let board = ''
let boardSize = 8
for(let x = 0; x < boardSize; x++) {
  for(let y = 0; y < boardSize; y++) {
    if((x + y) % 2 === 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  board += '\n'
}

console.log(board)