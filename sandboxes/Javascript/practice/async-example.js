async function greeting() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 3000)
  })

  let greeting = await promise
  console.log(greeting)
}

greeting()