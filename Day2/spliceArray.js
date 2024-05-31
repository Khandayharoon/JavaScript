// slice doesnt made the chages in the original array while splice  does made the changeds in the original array

let colors = ['red','pink','blue','green','white'];
//splice accepts mulit aruguments start index , delete count , elemtns you want yo add
// console.log( 'simple splice method with single arg' ,  colors.splice(3));

// console.log( 'simple splice  2 args' ,  colors.splice(1,3));
// console.log(colors);

console.log( 'simple splice  2 args' ,  colors.splice(1,3,'black','orange'));
console.log(colors);
