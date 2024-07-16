const inputs1 = [2,4,-5,6,-0,4,6,-7,-8,3,-5,-2];

const postiveArray =  inputs1.filter(fn);

function fn (num){
	return num > 0;
}

console.log(postiveArray);

//Both ways are correct

const inputs2 = [2,4,-5,6,-0,4,6,-7,-8,3,-5,-2];

const negativeArray =  inputs2.filter( (num) => num < 0);


console.log(negativeArray);