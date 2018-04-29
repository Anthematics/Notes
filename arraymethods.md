# ARRAY METHOD NOTES - WES BOS/Scott Tolinski Syntax Podcast Notes (episode 43)

## QUICK NOTES

Hitting Ctrl+F will allow you to search any of these topics (but you probably already know that.)
Unless mentioned other wise most of the content is from https://syntax.fm/ - episode 43 & most of the examples are from MDN JS developer docs (though some of them are from other work I did)

## Table Of Contents

## 1. General Information

  1. Thinking about array methods.

  2. Mutability.

  3. Chaining Methods.

  4. True/False/Truthy/Falsy

  5. Side effects

  6. Deep Cloning

## 2. Array methods

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

  11. Array spread

  12. Array spread

  13. Array Spread

## 3. Object Methods

  1. Object Spread

  2. Object.values()

  3. Object.keys()

  4. Object.entries()

  5. Object.freeze()

  6. Object.seal()

  7. Object.assign()

## General Information

### Thinking about array methods

Imagine each array method is like a machine.Raw materials are the input and the result is the output.The machine is the method itself.

### Mutability

A mutation is when you reach through an object , array string etc. and you change that data (this is important in react and functional programming as it is better to call setState() over changing the original data)

These methods do not affect the original data so much as manipulate it.You do not want to modify the data directly so much as return the data then change the state. Try not to hurt the original data but make new data from it.

### Chaining Methods

You can often chain methods to acheive all sorts of different results.(I.e you can first filter than map (or transform a list) you can - often you'll need to do 3 or 4 different things and you dont want to do it in one confusing loop so much as think through your process with chained methods.

### True / False / Truthy / Falsy

In JS If you have an if statement you can:

1. Check if something is true (which returns a value if true) same as false.
2. You can check a conditional i.e if 41 is greater than 40 which returns a true boolean or the opposite which returns a false boolean.

You can also return Truthy or Falsy because other values equate to true.

I.e a string with a word in it is truthy and an empty string is falsy (its not false but it kind of is. null is falsy , 0 is falsy , undefined is falsy.

### Side Effects

If you do not need to return data you can use forEach - if you do then use a different method. Usually something forEach can do can be better done with filter map etc.

### Deep Clone

"A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers."

<!-- citation https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c -->

## Array Methods

### .filter()

Filter is sort of a poor mans search. You can have a .filter method on the array and have a state coming in from the search and as you are typing you can have it filter through a number of items in an array.

Filter is a method on an array that takes a callback and you can (in that callback) determine what is the item that will be filtered or passed through - you can use ANY conditional that returns a true or false. It will output a new array depending on the conditional (if it is met or not) the brand new array will be an array filtered by that condition.

#### .filter() use cases

IF YOU ARE SEARCHING THROUGH EXISTING DATA YOU SHOULD FILTER IT.

#### filter() syntax

```Javascript

const totalPurchases = transactions.filter(transaction => transaction.type === 'purchase').length

```

### .map()

Map will take an array, modify it and return the modified array. Anytime you need to change the data changing what it looks like or remove items from the data you use map. You return the same amount of items in the array but you're changing the data.

If you need a new array thats based on a previous array (but different for whatever reason) thats when you use map.

#### .map() use cases

Couple use cases might be when you have to run a mathmatical operator on every number in an array.Or append a string.

#### map() syntax

```Javascript

const vendors = [];
const uniqueVendors = transactions.filter(transaction => transaction.type === 'purchase'
.map(transaction => transaction.vendor);
vendors.push(uniqueVendors);

```

### .reduce()

Reduce is considered somewhat confusing - it does not necessararly return an array - reduce can actually return anything. It is important to look at the properties (i.e the accumulator which is accumulating )

Reduce takes in an array of information and accumulates that information to return a single value. i.e take an array of products and add up the values (A running tally).

Another example could be seeing the amount of time a value is in a string - i.e a transcript of a podcast - you could take its entire string of the podcast - split it on a space to turn every said word into an array then reduce over it. For everytime it is in the array you log it. I.e hello = 1 my = 1 then you incriment by one and you see each instance - it returns an object (the word is the key the tally is the value)

#### .reduce() use cases

Reduce is great for tallying how often something has happened.

You can sequentally run promises with reduce (i.e if you have an array of data where each thing has to happen after the last) you can reduce them into promises and have them fire off sequentally.

Check out developer.mozilla.com to see these array functions. to see a ton of examples. (including the promises one.)

#### reduce() syntax

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

### .forEach()

  When we use Array.forEach() we are looping through each element THEN calling the function on it.As mentioned in the Side effect section is that .forEach() does not return a value.When you need to do something with returned data .forEach() is a good option.

#### .forEach() use cases

  Looping over a list of elements and adding an event listener/or something like that.
  When you dont need to return data.

#### foreach() syntax

  ```Javascript
  const array1 = [1,2,3,4,5]

  array1.forEach(function(element) {
    console.log(element);
  });

// this will output the numbers 1-5 vertically
```
### .some()

Array.some will check if some elements in the array pass a condition.
Another way to think of .some is to say - at least one is "this" - i.e if at least one person is legal drinking age

We can also look at it a short circuted for each - since you might have to run a for each till you've run the function on the data you're looking for - you cannot stop a forEach but with .some it can stop when a condition returns true.

#### .some() syntax

```Javascript
const array = [1, 2, 3, 4, 5];

const even = (element) => {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

```

### .every()

Array.every will check if all elements pass a condition.
Another way to think of .every is to say - all have to be "this" - i.e if all person are legal drinking age we can go out.

#### .every() syntax

```Javascript

const array = [1, 2, 3, 4, 5];
const allEven = (element) => {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.every(even));
// expected output: false
```

## .includes()

Array.includes will check if an array includes a given value. The difference between .some() & .includes() is . Note:it is not .contains()because it causes issues with Mootools (an older JS framework) - essentially mootools modified an array prototype causing issues with the way the mootools works online (js cant add it now as it would break mootools websites).

Difference between some and includes

.some() is based on a condition you write yourself .includes() takes a passed in string or value and its checking to see if the value is there (and you dont have to condition check with .includes()).Also includes does not do what is called a Deep check - i.e if you have an object and you want to check if that object is in an array .includes() will not do a 'deep check' for equality. i.e if you create 2 objects have the same values those are not really the same values, they are 2 seperate values - it will check if the original object is in the array but will not check if an object that looks exactly the same is in an array.

### .includes() syntax

```Javascript
const music = ['Black Keys','Spoon','White Rabbits', 'Broken Bells', 'The Shins']
console.log(music.includes('Spoon'));
```

^ this would return true.

### Array.from()

Array.from will take anything with a length or iterable and it will create it as an array with that many slots. if you need an array with 10 slots you can create an array with exactly that amount of space from an object.

#### Array.from use cases

if you want to create a leaderboard and leave it empty or an array of promises using an incrimented number - replaces lots of older things you'd do with splice and slice. You can create an array from variables (including strings) or map them.

#### Array.from() syntax

```Javascript
// array.from with MAP example
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

```

### .arrayOf()

Array.of() will take a number of arguments (as many as you want) and returns it as an array.
<!-- side note - could I make a new array from the first element of multiple arrays ? -->

## .arrayOf() Use Case

I found this myself ! with array of you can actually take variables and turn them into arrays.


#### .arrayOf() syntax

```Javascript

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]

```

### Array.spread

A spread will convert any kind of iteratable into an array [... syntax]

#### Array.spread use cases

Concatenating a group of arrays - open up a blank array and [...array1 ... array2 ...array3]
<!-- google concatening arrays with array.spread to confirm theory of syntax -->
Or you could use it to remove comments from a blog post (or removing an item from an array). You dont have to splice/slice/mutate the original data but you can return a new array.

#### Array.spread syntax


```Javascript

//  Old way
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
// With spread syntax this becomes:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

## Object Methods

### Object.spread

Object.spread

#### Object.spread use cases

Merging 2 objects -> imagine you have a function with many default arguments (or defaults in general)- if you want to overwrite them you can write const thing = ...defaults which will take every item from the object and spread it into a new object and any properties you write later on will just overwrite any duplicates in an object.It is great to merge things or set defaults and overwrite other stuff.

#### Object.spread syntax

```Javascript
```


### Object.Values()

Object.Values Will return an array of values from an object- giving you an array of JUST the values from an object.

#### Object.Values syntax

```Javascript
```

### Object.keys

Object.keys will return an array of keys from an object - giving you an array of all of the keys for each item of the array.

#### Object.keys syntax

```Javascript
```

### Object.entries

Object.entries will allow you to put the key & the value into an array for your object.

#### Object.entries use case

You can iterate over an object with object.entries with a forEach iteration.The great thing about
.entries is you dont need to reach outside to the original object as a reference.It can save lines of code by removing the need for
[square brackets].

#### Object.entries syntax

```Javascript
```

### Object.freeze()

Object.freeze() is going to freeze your object preventing you from adding to or modifying it - if you were to try to change a value it would throw an error (makes your object immutable). Some people think const does this but that is not the case as you can edit properties of objects in const etc.Object.freeze() creates true immutability.

#### Object.freeze() Use Cases

If you dont want people to change something directly

#### Object.freeze syntax

```Javascript
```

### Object.seal()

Object.seal() will stop any new properties to be added to an object but still allows you to edit existing properties.

#### Object.seal() Use cases

If you dont want people to add extra properties to objects object.seal is a good candidate.


```Javascript

```

### Object.assign()

Allows you to combine object - you basically get a new object with your old objects put together - but has generally been replaced by spread() [which uses .assign under the hood].  Object.assign like spread will not Deep clone properties. (if you have an object within an object - i.e the subobject will go with it but it will be referenced , not copied - so if you have 2 objects with the same subobject - if you change either one of them then the reference would change as well -> if you dont want this you'll need to do a deep clone - this may cause a performance issues on a larger scale)

#### Object.assign() use cases

Pretty much depreciated with the spread operator but you will see code with it.

```Javascript

```

<!-- Note to self -> check out deep cloning vs references -->