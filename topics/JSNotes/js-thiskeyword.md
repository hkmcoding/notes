### This

```this``` is used inside a function, and will always refer to a single object - the object that invokes (calls) the function where "this" is used.

### Call, Apply, Bind

#### Bind

The bind() method creates a new function that, when called, has it's this keyword set to the provided value

#### Call, Apply

The call() method calls a function with a given this value and arguments provided individually. Call is similar to the bind method, but it <b>DOES NOT</b> make a copy of the function it is being called on.

Call and Apply serve the <b>exact same purpose</b>. The <b><i>only difference between how they work is that</i></b> call expects all parameters to be passed in individually, whereas apply() expects an array of all our parameters.

