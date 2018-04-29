// Some uses of array of / array from

const cheese = [1,2,3,4,5,6,7,8]
const wheel = [9,10,11,12,13,14]

console.log(Array.of(cheese,wheel));         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined);

const forest = 'There are deers , bears and foxes here'
const forestArray = Array.from(forest)
const animals = forestArray.join('').split(' ')
console.log(forestArray)
console.log(animals)


