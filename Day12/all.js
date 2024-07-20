// const  currentDate = new Date();

// console.log(currentDate.getDate())

// console.log(currentDate.getHours())
// console.log(currentDate.getTime());
// console.log(currentDate.getFullYear());

function printTIme (){
	const currentDate =  new Date();

	console.log(`${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`);
}

setInterval(printTIme , 1000);