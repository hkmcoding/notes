// Write a real life example of using closers

var clickCounter = (function () {
  var counter = 0

  return function () {
    counter++
  }
})()

// You can use this function with a click handler. Being an IIFE, it sets count to 0 and will update it every time someone clicks
// This shows that closure can make it possible for "private" variables
// counter is protected by the scope of the anonymous function, and can only be changed using the add function