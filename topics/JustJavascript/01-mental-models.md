# 01. Mental Models


```
let a = 10;
let b = a;
a = 0;
```
What are the values of <i>a</i> and <i>b</i> after this runs?  
Answer: <i>b</i> equals 10

# Summary

In this module we explore what mental models are and how they help us understand code. Consider the example above. Some have learned that variables are boxes that hold a value. When going through the above example, note your inner monologue. There is a set of deep-rooted analogies associated with programming. <b>These approximations of how something works in your head is known as "mental models".</b>  
  

These intuitionss (like "boxiness" of variables) influence how we read code our whole lives. This is why it is important to have a strong and accurate mental model. Just Javascript will gradually build (or like in my case, rebuild) your mental model of Javascript to be more accurate and useful. <b>A good mental model will help you find and fix bugs faster, understand other people's code better, and feel confident in the code you write.</b>  

### Fast and Slow Systems
Humans use two different "systems" of thinking. Whenever we can, we use a "fast" system. The fast system is good at pattern matching and gut reaction. The "slow" system is responsible for complex step-by-step reasoning. It helps us plan future events, engage in argument, or follow mathematical proofs. Using the slow system can be draining so we tend to default to the fast one - even when dealing with intellectual tasks.  

Can you figure out what the following function does at a quick glance?

```
function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.');
  }
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata,
  };
  copy.metadata.title = 'Copy of ' + original.metadata.title;
  return copy;
}
```

Answer: The function duplicates a spreadsheet. It first checks if there are pending changes that need to be saved. Then it takes the copy and adds metadata to the spreadsheet. You may have not noticed that the <b>functional also accidentally changes the title of the original spreadsheet.</b>