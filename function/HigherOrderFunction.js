// Higher Order Function

const inputs = [2,3,4,5,6,7,8];
//Higher Order Function
function operation (inputs , fn){
    const output = [];
    for (let num of inputs){
        output.push(fn(num));
    }
    return output;
}

//Call Back Function
function square(num){
    return num*num;
}

//call Back function
function cube(num){
    return num*num*num
}

//callback funtion
function divide(num){
    return num/5;
}

console.log(operation(inputs,square));
console.log(operation(inputs,cube));
console.log(operation(inputs,divide));