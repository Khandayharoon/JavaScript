// function in JavaScript

// Function Declaration
function sum (a,b){
    return a+b;
}
console.log (`Simple Function :-  ${sum (10,40)}`)   //50 output

// Function Expression

const sumExp = function (a,b){
    return a+b;
}
console.log (`Function Expression :-  ${sumExp (60,40)}`)   //100 output

//Arrow function
const productExp = (n1, n2) =>{
    return n1*n2;
}
//Another way
const pro = (n1,n2) => n1*n2;
console.log (`Arrow Function :-  ${productExp (5,5)}`)   //25 output
console.log (`Another Arrow Function :-  ${pro (11,11)}`)   //25 output