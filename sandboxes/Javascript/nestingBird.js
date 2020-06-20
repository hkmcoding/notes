function nestingBird (arr) {

  let str = ''

  if (!Array.isArray(arr)) {
    return str += arr
  }

  for (let i = 0; i < arr.length; i++) {
    str += nestingBird(arr[i])
  }

  return str

}

console.log(nestingBird(['r', 'o', ['b', ['i'], 'n']]))