### 07. Properties

```
let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
}

let john = {
  surname: 'Watson',
  address: sherlock.address
}

john.surname = 'Lennon'
john.address.city = 'Malibu'

console.log(sherlock.surname); // ?
console.log(sherlock.address.city); // ?
console.log(john.surname); // ?
console.log(john.address.city); // ?
```

Answers: Holmes, London, Lennon, Malibu
Correct Answer: Holmes, Malibu, Lennon, Malibu

<b>In our JavaScript universe, both variables and properties act like "wires". However, the wires of properties start from objects rather than from our code</b>

```
let sherlock = { surname: 'Holmes', age: 64 };
console.log(sherlock.boat.name); // ?
```

Answer: Undefined
Corect Answer: Throws an error

### Performing an assignment

1. Figure out which wire is on the left
2. Figure out which value is on the right
3. Point that wire to that value

### Evaluating expressions

1. Figure out which value is on the left
2. If it's null or undefined, throw an error
3. If that property exists, the result is the value its wire points to
4. If that property doesn't exist, the result is undefined

