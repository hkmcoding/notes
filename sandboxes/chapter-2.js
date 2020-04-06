/*

1. Write a loop that makes seven calls to console.log to output the following triangle

#
##
###
####
#####
######
#######

*/


// My solution
let string = ''
for(let i = 0; i < 7; i++) {
  string += '#'
  console.log(string)
}

// Book solution
for(let line = "#"; line.length < 8; line += "#") {
  console.log(line)
}

/*
2. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// my solution
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if(i % 3 === 0) {
    console.log("Fizz")
  } else if(i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

// Book solution
for(let i = 1; i <= 100; i++) {
  let output = ''
  if(i % 3 === 0) output += "Fizz"
  if(i % 5 === 0) output += "Buzz"
  console.log(output || i)
}

/*
3. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// My solution (I had to look at the book solution first) - trying it again after looking at the book solution
// I couldn't solve the problem and had to look at the book solution for the answer.

// Nested for loops - The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once

// Book solution
let board = ''
let gridSize = 10
for(let x = 0; x < gridSize; x++) {
  for(let y  = 0; y < gridSize; y++) {
    if((x + y) % 2 === 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  // This will execute after the inner loop is done
  board += '\n'
}
console.log(board)

