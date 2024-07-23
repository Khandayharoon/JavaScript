const fs = require("fs");

function haroonReadFile(callback){
	fs.readFile("text.txt", "utf-8", function(err,data){
		callback(data);
	});
}

function onceDone(data){
	console.log(data);
}


haroonReadFile(onceDone);