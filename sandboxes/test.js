let countChar = (string, char) => {
  let charCount = 0
  for(let i = 0; i < string.length; i++) {
    if(string[i] === char) charCount++
  }
  return charCount
}

let countBs = string => {
  return countChar(string, 'B')
}

console.log(countBs("BIGBALLERBRAND"))