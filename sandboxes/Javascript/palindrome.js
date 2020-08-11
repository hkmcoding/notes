// Given a string, return true if the string is a palindrome and false if it isn't

function checkPalindrome (word) {
  // ensure that word is a string
  // edge case - does casing matter?
  
  // racecar -> racecar
  if (typeof word !== 'string') return false
  return word === word.split('').reverse().join('')
}

console.log(checkPalindrome('racecar'))