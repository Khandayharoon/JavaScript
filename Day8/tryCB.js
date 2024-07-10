function calculateArithmatic(a,b,type){
    if(type === "sum"){
        return a+b;
    }
    if(type === "minus"){
        return a-b;
    }
}
let result = calculateArithmatic(4,5,"sum");
console.log(result);