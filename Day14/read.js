const fs = require("fs");

console.log("Before reading the text.txt file");

fs.readFile("text.txt","utf-8", function(err,data){
	console.log(data);
});


console.log("After reading the text.txt file");
