
/*
Map callback fucntion accepts mutliple argumets 
currentELemt, index, arr
Const inputs = [2,3,4,5,6];
inputs.map(function (CurrentElemet, indexNumber ,arr){});
 */

const array = [1, 2, 3, 4, 5];
const squaredArray = array.map(function(currentElement) {
    return currentElement * currentElement;
});
console.log(squaredArray);

//Best way to write Map Function with Arrow Function
const cubedArray = array.map((nums)=> nums *3);
console.log(cubedArray);