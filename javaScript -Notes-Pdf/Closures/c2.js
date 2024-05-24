// how closures help us

// let count = 0;
// function counter() {
//     return ++count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// better aproche is below

function counter(){
    let count = 0;
    return function (){
        return ++count;
    }
}

let getcounter = counter();
console.log(getcounter());
console.log(getcounter());
console.log(getcounter());
console.log(getcounter());
console.log(getcounter());
console.log(getcounter());
console.log(getcounter());

console.log(count);