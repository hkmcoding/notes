// Write a function called strictEquals(a, b) that returns the same value as a === b. Your implementation must not use the === or !== operators.

const strictEquals = (a, b) => {
  if (Number.isNaN(a)) {
    return false
  } else if ((Object.is(0, a) && Object.is(-0, b)) || (Object.is(-0, a) && Object.is(0, b))) {
    return true
  }
  return Object.is(a, b)
}

console.log(strictEquals(0, -0))