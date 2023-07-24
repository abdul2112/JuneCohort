let age = 26;
console.log(age);
const name = 'abdul';

let myName = 'abdulkadir';
age = 24;
let dob = 99;
console.log(age);

console.log(
  `my name is ${myName}. I am ${age} years old and I was born in ${dob}.`
);
console.log(typeof age);

// string
// number
// boolean
// null
// undefined
// object

//Array:
// ['', 1, true, undefined, null, objects];
// position/index != number of items in the array
//array.length finds how many items are in the array
//array[n] = 'something' will reassign item in that position

let array = ['bread', 'milk', 'cheese', 'fruits'];
// console.log('console.log(typeof "array")', '>>', typeof array);
console.log(array, 'the length of this array', '>>', array.length);

array[3] = 'juice';
array[4] = 'banana';

//array.push(0) adds item to the end of the array
array.push(0);
console.log(array);
//array.pop() removes item from the end of the array
array.pop();
console.log(array);

//array.unshift(0) adds item to the start of the array
array.unshift(0);
console.log(array);
//array.shift() removes item to the start of the array
array.shift();
console.log(array);

//array.splice(index, numberOFItems) removes 'x' amount of items you choose starting with the index
array.splice(0, 2);
console.log(array);
