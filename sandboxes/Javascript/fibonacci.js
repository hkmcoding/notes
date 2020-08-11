// Write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument 
// Fibonacci is where each number is the sum of the preceding two, 0 1 1 2 3 5 8 13 21 34

const fib = n => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(3))