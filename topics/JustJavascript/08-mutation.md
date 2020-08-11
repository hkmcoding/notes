### Mutation

<b>Objects might appear "nested" in our code, but in our universe each object is completely separate. An object cannot be "inside" of another object.</b>

<b>A property always points at a value! It can't point at another properety or a variable. In general, all wires in our universe point at values.</b>

Think about the previous lesson and how changing one object's property can change anothers. How do we prevent this? 

### Mutation (cont.)

(Lots of diagrams in this section, it is best to review the lecture in it's entirety)

Objects are never “nested” in our universe.  

Pay close attention to which wire is on the left side of assignment.  

Changing an object’s property is also called mutating that object.  

If you mutate an object, your code will “see” that change via any wires pointing at that object. Sometimes, this may be what you want. However, mutating accidentally shared data may cause bugs.  

Mutating the objects you’ve just created in code is safe. Broadly, how much you’ll use mutation depends on your  app’s architecture. Even if you won’t use it a lot, it’s worth your time to understand how it works. 

You can declare a variable with const instead of let. That allows you to enforce that this variable’s wire always points at the same value. But remember that const does not prevent object mutation!  