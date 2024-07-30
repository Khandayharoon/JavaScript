function findsum (n){
	let ans = 0 ;

	for(let i=1; i<=n; i++){
		ans = ans + i;
	}

	return ans;
}


function findSumTotal(){
	console.log(findsum(100)) ;
}

setTimeout(findSumTotal , 1000);

console.log("After the functions");
