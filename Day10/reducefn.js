const arr = [2,4,6,8,10];

let fin = arr.reduce((accumulator , currentValue) => accumulator  += accumulator);
console.log(fin);
