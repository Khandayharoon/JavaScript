// function sum (num1,num2){
//     let result = num1+num2;
//     return result;
// }

function sum (num1 , num2 , fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayresult(data){
    console.log("Result of the sum is : " , data);
}

function displayresultPassive(data){
    console.log("Sum's result is : " , data);
}

sum(2,4,displayresult);
sum(2,6,displayresultPassive);