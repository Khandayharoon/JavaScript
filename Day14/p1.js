const fs = require("fs");

function haroonReadFile(){
	return new Promise(function(resolve){
		fs.readFile("text.txt","utf-8",function(err,data){
			resolve(data);
		});
	});
}

function onceDone(data){
	console.log(data);
}

haroonReadFile().then(onceDone);