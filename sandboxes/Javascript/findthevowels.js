// Write a function that takes a string as an argument and returns the number of vowels contianed in that string

const vowelCount = str => {
  let count = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count ++
    }
  }
  return count
}

console.log(vowelCount('Humza'))