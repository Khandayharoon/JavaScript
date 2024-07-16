const  arr = [1,23,45,78,90,34,42];

const res1 = arr.find(num => num == 23);
console.log(res1);

const res4 = arr.find(num => num == 203);
console.log(res4);

const res2 = arr.findIndex((num) => num ==78);
console.log(res2);

const res3 = arr.findIndex((num) => num ==780);
console.log(res3);