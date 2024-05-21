// Pure funcion
// writttng console log statemetn inside a pure function makes it impure

function pure (num1,num2){
    return num1*num2;
}
console.log(`Pure function is ${pure(4,6)}`);


// impure function
let discout = 25;
function impure (price){
    discout = discout-5;
    return price-discout;
}
console.log(`impure function is ${impure(50)}`);