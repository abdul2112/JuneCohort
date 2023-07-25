// ## Homework

// 1. **From you understanding of array create an array with 15 items inside**
console.log('Q1');
console.log('||||||||||||||||||||||||||||||||||||||||');

let listOfItems = [
  'grape',
  'apple',
  'orange',
  'banana',
  'cherry',
  'pineapple',
  'watermelon',
  'pomegranate',
  'mango',
  'avacado',
  'papaya',
  'strawberry',
  'peach',
  'plum',
  'raspberry',
];
console.log(listOfItems);

// 2. **From the array just created in the above question remove the last item in the array. You cannot alter the original array.**
console.log('Q2');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems.pop();
console.log(listOfItems);

// 3. **Add an item to the end of the list. Cannot alter the original array**
console.log('Q3');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems.push('lemon');
console.log(listOfItems);

// 4. **Find the position of the first item, middle item and last item of the list and print them off separately.**
console.log('Q4');
console.log('||||||||||||||||||||||||||||||||||||||||');

console.log('first item >>', listOfItems[0]);

console.log('middle item >>', listOfItems[7]);

// console.log('last item >>', listOfItems[listOfItems.length - 1]);
//Easier way to do it below:
console.log('last item >>', listOfItems.at(-1));

// 5. **Modify 3 items in the array and print them off
console.log('Q5');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems[0] = 'pear';
listOfItems[3] = 'milk';
listOfItems[7] = 'bread';
console.log(listOfItems);

// 6. **Using string interpolation combine 5 different variables together**
console.log('Q6');
console.log('||||||||||||||||||||||||||||||||||||||||');

//prettier-ignore
console.log(
  `Item 1 = ${listOfItems[0]}. Other items are ${listOfItems[2]}, ${listOfItems[5]}, ${listOfItems.at(-1)} & ${listOfItems[8]}`);

// 7. **Delete 2 items in the array**
console.log('Q7');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems.splice(2, 2);
console.log(listOfItems);

// 8. **remove the first item from the array**
console.log('Q8');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems.shift();
console.log(listOfItems);

// 9. **add an item to the first position of the array**
console.log('Q9');
console.log('||||||||||||||||||||||||||||||||||||||||');

listOfItems.unshift('blackberry');
console.log(listOfItems);
