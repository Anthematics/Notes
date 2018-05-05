// Some uses of array of / array from

const cheese = [1,2,3,4,5,6,7,8]
const wheel = [9,10,11,12,13,14]
console.log(Array.of(cheese,wheel));

console.log(Array.of(1, 2, 3));
Array.of(undefined);

const forest = 'There are deers , bears and foxes here'
const forestArray = Array.from(forest)
const animals = forestArray.join('').split(' ')
console.log(forestArray)
console.log(animals)


// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)



function findSum(n) {
  const divide3 = 3 % n
  const divide5 = 5 % n
  console.log(divide3)
  console.log(divide5)
}

console.log(findSum(10))

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
