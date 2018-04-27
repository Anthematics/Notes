# ARRAY METHOD NOTES - WES BOS/Scott Tolinski Syntax Podcast Notes (episode 43)

## QUICK NOTE

Hitting Ctrl+F will allow you to search any of these topics (but you probably already know that.)

## Table Of Contents

###General Information

1. Thinking about array methods.

2. Mutability.

3. Chaining Methods.

4. True/False/Truthy/Falsy

5. Side effects

### Array methods

1. .filter()

2. .map()

3. .reduce()

4. .forEach()

5. .some()- can be used as a short circuit forEach

6. .every()

7. .includes() (why not contains?)

8. Array.from()

9. Array.from()

10. Array.of()

11. Object.values()

12. Object.keys()

13. Object.entries()

14. Array spread

25. Array spread

26. Array Spread

27. Object Spread

28. Function Rest

29. Object.freeze()

30. Object.seal()

## On array methods

Imagine each array method is like a machine.Raw materials are the input and the result is the output.The machine is the method itself.

## Mutability

A mutation is when you reach through an object , array string etc. and you change that data (this is important in react and functional programming as it is better to call setState() over changing the original data)

These methods do not affect the original data so much as manipulate it.You do not want to modify the data directly so much as return the data then change the state. Try not to hurt the original data but make new data from it.

## Chaining Methods

You can often chain methods to acheive all sorts of different results.(I.e you can first filter than map (or transform a list) you can - often you'll need to do 3 or 4 different things and you dont want to do it in one confusing loop so much as think through your process with chained methods.

## True / False / Truthy / Falsy

In JS If you have an if statement you can:

1. Check if something is true (which returns a value if true) same as false.
2. You can check a conditional i.e if 41 is greater than 40 which returns a true boolean or the opposite which returns a false boolean.

You can also return Truthy or Falsy because other values equate to true.

I.e a string with a word in it is truthy and an empty string is falsy (its not false but it kind of is. null is falsy , 0 is falsy , undefined is falsy.

## Side Effects

If you do not need to return data you can use forEach - if you do then use a different method. Usually something forEach can do can be better done with filter map etc.

## .filter()

Filter is sort of a poor mans search. You can have a .filter method on the array and have a state coming in from the search and as you are typing you can have it filter through a number of items in an array.

Filter is a method on an array that takes a callback and you can (in that callback) determine what is the item that will be filtered or passed through - you can use ANY conditional that returns a true or false. It will output a new array depending on the conditional (if it is met or not) the brand new array will be an array filtered by that condition.

### .filter() use cases

IF YOU ARE SEARCHING THROUGH EXISTING DATA YOU SHOULD FILTER IT.

### filter() syntax

```Javascript

const totalPurchases = transactions.filter(transaction => transaction.type === 'purchase').length

```

## .map()

Map will take an array, modify it and return the modified array. Anytime you need to change the data changing what it looks like or remove items from the data you use map. You return the same amount of items in the array but you're changing the data.

If you need a new array thats based on a previous array (but different for whatever reason) thats when you use map.

### .map() use cases

Couple use cases might be when you have to run a mathmatical operator on every number in an array.Or append a string.

### map() syntax

```Javascript

const vendors = [];
const uniqueVendors = transactions.filter(transaction => transaction.type === 'purchase'
.map(transaction => transaction.vendor);
vendors.push(uniqueVendors);

```

## .reduce()

Reduce is considered somewhat confusing - it does not necessararly return an array - reduce can actually return anything. It is important to look at the properties (i.e the accumulator which is accumulating )

Reduce takes in an array of information and accumulates that information to return a single value. i.e take an array of products and add up the values (A running tally).

Another example could be seeing the amount of time a value is in a string - i.e a transcript of a podcast - you could take its entire string of the podcast - split it on a space to turn every said word into an array then reduce over it. For everytime it is in the array you log it. I.e hello = 1 my = 1 then you incriment by one and you see each instance - it returns an object (the word is the key the tally is the value)

## .reduce() use cases

Reduce is great for tallying how often something has happened.

You can sequentally run promises with reduce (i.e if you have an array of data where each thing has to happen after the last) you can reduce them into promises and have them fire off sequentally.

Check out developer.mozilla.com to see these array functions. to see a ton of examples. (including the promises one.)

## reduce() syntax

```Javascript

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); //Here we are making the current value 5 and adding the accumulator to it.
// expected output: 15

```

## .forEach()

### .forEach() use cases

### foreach() syntax

```Javascript

```

## .some()

### .some() syntax

```Javascript

```

## .every()

### .every() syntax

```Javascript

```

## .includes()

### .includes() syntax

```Javascript

```

## .arrayFrom()

### .arrayFrom() syntax

```Javascript

```

## .arrayOf()

### .arrayOf() syntax

```Javascript
```

## Object.values

### Object.values syntax

```Javascript
```

## Object.keys

### Object.keys syntax

```Javascript
```

## Object.entries

### Object.entries syntax

```Javascript
```

## Array.spread

### Array.spread syntax

```Javascript
```

## Object.spread

### Object.spread syntax

```Javascript
```

## Function Rest

## Object.freeze()

```Javascript
```

## Object.seal()

```Javascript
```
