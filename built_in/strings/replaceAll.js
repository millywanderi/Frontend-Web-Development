#!/usr/bin/node
// Returns a new string with all matches of a pattern replaced by a replacement
const myStr = 'December holiday is here. I cannot wait to spend my holiday at the countryside. Looking forward for this holiday.';
const newStr = myStr.replaceAll('holiday', 'Holiday');
console.log(newStr);
// Output: 'December Holiday is here. I cannot wait to spend my Holiday at the countryside. Looking forward for this Holiday.'; 

// One can use regrex to match the case in case of different replace group
const favcountry = 'Kenya is the best country. I love kenya.';
const replaceCountry = favCountry.replaceAll('Kenya', 'Tanzania');

console.log(replaceCountry);
// Output: Tanzania is the best country. I love kenya.

const correctCountry = favCountry.replaceAll(/[Kk]{1}anzania/g, 'tanzania');
console.log(correctCountry);
// Output: tanzania is the best country. I love tanzania.
