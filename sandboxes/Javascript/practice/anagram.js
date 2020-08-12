const checkAnagram = (strOne, strTwo) => {
  let splitStr = strOne.split('')
  if (strOne.length !== strTwo.length) {
    return false
  }
  for (let i = 0; i < strTwo; i++) {
    if (!splitStr.includes(strTwo[i])) {
      return false
    }
  }
  return true
}

console.log(checkAnagram('afariend', 'fiaaendr'))