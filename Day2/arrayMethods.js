let arr =[5,6,3,73];
console.log("Original Array" , arr);

console.log("Push Method" , arr.push(999),arr);
console.log("Unshift Method" , arr.unshift(111),arr);


console.log("Pop Method" , arr.pop(), arr);
console.log("shift Method", arr.shift(), arr);


let months = ["jaunary","july", "march","august"];
// months[0]=months[1];
// months[1]="june"
// console.log(months);

// we could do

months.shift();
months.shift();
console.log(months);
months.unshift("june");
months.unshift("july");
console.log(months);