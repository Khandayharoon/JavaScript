
const fs = require("fs");
function readAndWriteMyFile(){
    
    //create a pormise and return it;
    return new Promise((resolve,reject)=>{

        //read the file and get the data;

        fs.readFile("t.txt","utf-8",(err,data)=>{
            if(err){
                //if there is any Error reject the promise;
                return reject(err);
            }
            //process the content;
            let content = data.split(/\s+/).join(' ');

            //write back the processed content to the file t.txt;

            fs.writeFile("t.txt",content,(err)=>{
                if(err){
                 // Reject the promise if there's an error writing the file;   
                    return reject(err);
                }
                // Resolve the promise if everything goes well
                resolve();
            });
        });
    });
}

const ReadWrite = readAndWriteMyFile();
ReadWrite.then(()=>{
    console.log("'File cleaned successfully.'")
})
.catch((err)=>{
    console.log("Error" , err);
})