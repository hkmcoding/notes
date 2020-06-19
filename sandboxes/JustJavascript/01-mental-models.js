let originalObject = {
  created: '1 January, 1970 00:00:00 UTC',
  author: 'Humza Mujib',
  content: 'Sample content',
  metadata: {
    title: 'Sample title'
  }
}

const duplicateObject = (original) => {
  let copy = {
    created: Date.now(),
    author: original.author,
    content: original.content,
    metadata: original.metadata
  }
  copy.metadata.title = 'Copy of ' + original.metadata.title
  return copy
}

let copyObject = duplicateObject(originalObject)
console.log('Original', originalObject)
console.log('Copy', copyObject)