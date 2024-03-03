/**
    const myset = new Set ([2,3,4,5,6,]);
    console.log(myset);
    console.log(typeof(myset));
 */
const myset = new Set();
myset.add(2);
myset.add(6);
myset.add(4);
myset.add(2);    
// Set will ignore above 2 duplicate Element   
myset.add(5);
console.log(myset);
console.log(myset.size);
console.log(myset.has(9));
console.log(myset.delete(4));
console.log(myset);

// concate two Array but the mergedArray should not have duplicaties;

const arr1 = [2,3,4,5,6,1,1];
const arr2 = [1,0,9,8,7,6,5];

const myArraySet = new Set([...arr1, ...arr2]);
const mergedArray = Array.from(myArraySet);
console.log(mergedArray);