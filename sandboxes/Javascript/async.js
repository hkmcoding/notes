// Fetching data async await example

function fetchData () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data has been fetched')
    }, 2000)
  })
}

async function prepData () {
  const data = await fetchData()
  console.log(data)
}

function startProgram () {
  console.log('Your program has started')
}

prepData()
startProgram()