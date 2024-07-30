
const promiseOne = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve();
		console.log("promiseOne in setTimeout Async task compelete");
		// resolve();
	},1000);
})

promiseOne.then(function(){
	console.log("PromisedOne Consumed");
})

new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("promiseTwo in setTimeout Async task compelete");
		resolve();
	},1000);
}).then(function(){
	console.log("PromisedTwo Consumed")
})



const promiseThree = new Promise(function(resolve , reject){

	setTimeout(function(){
		resolve({userName:"Haroon" , email:"Haroon@example.com"});
	},1000);
})

promiseThree.then(function(data){
	console.log(data);
})

const PromiseFour = new Promise(function (resolve, reject){

	setTimeout(function(){
		let error = true;

		 if(!error)
		 {
		 	resolve({userName:"HaroonKhanday" , email:"Haroon@example.com" ,password:"123"});
		 }else{
		 	reject("ERROR! something went wrong");
		 }
	},1000);
});

PromiseFour
.then(function(data){
	console.log(data);
	return data.userName;
})
.then(function(userName){
	console.log(userName);
})
.catch(function(error){
	console.log(error);
})
	.finally(function(){
		console.log("All work done")
	})


const promiseFive = new Promise(function(resolve, reject){

	setTimeout(function(){
		let error = false;

		 if(!error)
		 {
		 	resolve({userName:"JavaScript" ,password:"123"});
		 }else{
		 	reject("ERROR! JavaScript went wrong");
		 }
	},1000);
})

async function PromiseFiveConsumed(){

	try{
		const response = await promiseFive;
	     console.log(response);
	}
	catch(error){
		console.log(error);
	}
}
PromiseFiveConsumed();




async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))