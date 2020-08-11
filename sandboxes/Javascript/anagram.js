// Write a function that checks if two provided strings are anagrams of each other; letter casing shouldn't matter; also consider only characters, not spaces and punctuation

const anagram = (stringOne, stringTwo) => {
  if(stringOne.length !== stringTwo.length) return false

  let splitString = stringOne.split('')
  for (let i = 0; i < stringTwo.length; i++) {
    if (!splitString.includes(stringTwo[i])) {
      return false
    }
  }
  return true
}

console.log(anagram('finder', 'friend'))

// Problems with this solution: accounts for spaces and punctuation (a potential solution is using regular expression)