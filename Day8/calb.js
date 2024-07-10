function div (num1,num2){
    return num1/num2;
}

function sub (num1 ,num2){
    return num1-num2;
}

function call (num1,num2, fntocall){
    let result = fntocall(num1,num2);
    console.log(result);
}


call(2,5,sub);
call(10,2,div);