// Write a function called fizzBuzz that logs numbers from 1 to n, where n is the integer the function takes as its parameter. Log fizz instead of the number for multiples of 3, log buzz instead of the number for multiples of 5, log fizzbuzz for numbers that are multiples of both 3 and 5

function fizzBuzz (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(5)