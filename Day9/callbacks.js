function subtraction(a,b) {
	return a-b;
}

function Addition (a,b){
	return a+b;
}

function  Multiplication(a,b) {
	return a*b;
}

function division(a,b){
	if(b===0){
		return "division is not possible";
	}
	else
	{
		return a/b;
	}
}


function final(num1, num2, functionTOCall){
	let result = functionTOCall(num1,num2);
		console.log(result);
}

final(3,7,Addition)