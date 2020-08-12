### Closure

A closure is a function that remembers its outer variables and can access them. 

```
function makeCounter() {
  let count = 0

  return function() {
    return count++
  }
}

let counter = makeCounter()
alert(counter()) // 0
alert(counter()) // 1
alert(counter()) // 2
```

```
function greet() {
    name = 'Hammad';
    return function () {
        console.log('Hi ' + name);
    }
}

greet(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
greetLetter = greet();

 // calling greetLetter calls the returned function from the greet() function
greetLetter(); // logs 'Hi Hammad'
```

Another type of closure is Immediately-Invoked Function Expression (IIFE).