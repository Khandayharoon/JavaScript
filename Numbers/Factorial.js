let  num = 5;
let fact = 1 ;
function Factorial(num){
    for(let i=1; i<= num; i++){
        fact = fact * i;
    }
}
Factorial(num);
console.log(` Factorial of ${num} is ${fact}`)