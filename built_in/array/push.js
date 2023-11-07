#!usr/bin/node
// A method that adds the specified elements to the end of an array and returns the new length of the array
const banks = ['NCBA', 'KCB', 'Equity', 'Coop'];
const num = banks.push('DTB');
console.log(num);  // Output: 5
console.log(banks);  // Output:['NCBA', 'KCB', 'Equity', 'Coop', 'DTB']

banks.push('Barclays', 'Chase', 'I&M');
console.log(banks);  // Output:['NCBA', 'KCB', 'Equity', 'Coop', 'DTB', 'Barclays', 'Chase', 'I&M']

// merging two arrays
const food = ['pilau', 'choma', 'chapati'];
const moreFood = ['mukimo', 'veges'];
food.push(...moreFood);
console.log(food);  // ['pilau', 'choma', 'chapati', 'mukimo', 'veges']
