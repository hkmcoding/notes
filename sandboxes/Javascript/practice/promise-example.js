const { reject } = require("async")

function downloadFile (url) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      url ? resolve(console.log('Valid url, downloading file')) : reject(console.log('Invalid url, cancelled download'))
    })
  })
}

function prepareFile () {
  console.log('Preparing file...')
}

function rejectFile () {
  console.log('Rejecting file...')
}

function resizeFile () {
  console.log('Resizing file...')
}

function handleFiles () {
  return downloadFile(true)
    .then(success => prepareFile())
    .then(success => resizeFile())
    .catch(fail => rejectFile())
}

handleFiles()