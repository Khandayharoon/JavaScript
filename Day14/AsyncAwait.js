function data(){

	return new Promise(function(resolve){
		resolve("hi there");
	});
}


async function main() {
	let val = await data();
	console.log(val);
}

main();