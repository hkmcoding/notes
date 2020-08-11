### Scope

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

In JavaScript, there are two types of scopes: global scope and local scope. 

##### Global Scope

There is only one global scope throughout a JavaScript document. Variables inside the global scope can be accessed anda ltered in any other scope.

##### Local Scope

Variables defined inside a function are in the local scope. This means that variables having the same name can be used in different functions.

##### Block Statements

Block statements like if and switch conditions or for and while loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in. The introduction of let and const allowed for local scope in block statements.

##### Context

Sometimes people confuse scope and context together. Context is used to refer to the value of this. In the global scope context is always the Window object.

##### Lexical Scope

Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents.

```
function grandfather() {
    var name = 'Hammad';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}
```