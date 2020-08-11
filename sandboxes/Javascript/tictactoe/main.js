let board = {
  topRow: [null,null,null],
  middleRow: [null,null,null],
  bottomRow: [null,null,null]
}

//event listeners
const topLeft = document.querySelector('#top-left')
const topMiddle = document.querySelector('#top-middle')
const topRight = document.querySelector('#top-right')
const middleLeft = document.querySelector('#middle-left')
const middleMiddle = document.querySelector('#middle-middle')
const middleRight = document.querySelector('#middle-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomMiddle = document.querySelector('#bottom-middle')
const bottomRight = document.querySelector('#bottom-right')
const turn = document.querySelector('#turn')
const resetButton = document.querySelector('#reset')

// Win Conditions
let winCondition = false

const checkWinner = () => {
  if(board.topRow[0] === board.topRow[1] && (board.topRow[0] === board.topRow[2])) {
    winCondition = true
  }
  else if(board.middleRow[0] === board.middleRow[1] && (board.middleRow[0] === board.middleRow[2])) {
    winCondition = true
  }
  else if(board.bottomRow[0] === board.bottomRow[1] && (board.bottomRow[0] === board.bottomRow[2])) {
    winCondition = true
  }
  //straight down
  else if(board.topRow[0] === board.middleRow[0] && (board.topRow[0] === board.bottomRow[0])) {
    winCondition = true
  }
  else if(board.topRow[1] === board.middleRow[1] && (board.topRow[1] === board.bottomRow[1])) {
    winCondition = true
  }
  else if(board.topRow[2] === board.middleRow[2] && (board.topRow[2] === board.bottomRow[2])) {
    winCondition = true
  }
  // cross
  else if(board.topRow[0] === board.middleRow[1] && (board.topRow[0] === board.bottomRow[2])) {
    winCondition = true
  }
  
  else if(board.topRow[2] === board.middleRow[1] && (board.topRow[2] === board.bottomRow[0])) {
    winCondition = true    
  }
}

console.log(board.topRow)
console.log(board.middleRow)
console.log(board.bottomRow)


// Player Functions
const play = (player) => {
  topLeft.addEventListener('click', () => {
      topLeft.innerText = player
  })
  topMiddle.addEventListener('click', () => {
      topMiddle.innerText = player
  })
  topRight.addEventListener('click', () => {
      topRight.innerText = player
  })
  middleLeft.addEventListener('click', () => {
      middleLeft.innerText = player
  })
  middleMiddle.addEventListener('click', () => {
      middleMiddle.innerText = player
   })
  middleRight.addEventListener('click', () => {
      middleRight.innerText = player
  })
  bottomLeft.addEventListener('click', () => {
      bottomLeft.innerText = player
  })
  bottomMiddle.addEventListener('click', () => {
      bottomMiddle.innerText = player
  })
  bottomRight.addEventListener('click', () => {
      bottomRight.innerText = player
  })
}

// reset button
const reset = () => {
  board.topRow = [null,null,null]
  board.middleRow = [null,null,null]
  board.bottomRow = [null,null,null]
  topLeft.innerText = ' '
}
resetButton.addEventListener('click', () => {
  let topRow = document.querySelectorAll('.top-row')
  topRow.forEach(box  => {
      box.innerText = ''
  })
  let middleRow = document.querySelectorAll('.middle-row')
  middleRow.forEach(box => {
      box.innerText = ''
  })
  let bottomRow = document.querySelectorAll('.bottom-row')
  bottomRow.forEach(box => {
      box.innerText = ''
  })
})

let gameState = 0


const game = () => {
  let gameState = 0
  let currentPlayer
  gameState === 0 ? currentPlayer = 'O' : currentPlayer = 'X'
  console.log('currentPlayer', currentPlayer)
  console.log('winCondition', winCondition)
  
  updateGameState = () => {
    gameState === 0 ? gameState = 1 : gameState = 0
  }

  if (winCondition === false) {
    play(currentPlayer)
  }
}

game()