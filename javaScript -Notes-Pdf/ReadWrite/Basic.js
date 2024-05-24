const fs = require("fs");
const fileText = "Hey world! i am here";

fs.writeFile("fs.text", fileText, "utf8", (error) => {
  if (error) {
    console.log("Can not write in Fs.text file");
    return;
  }
  console.log("File written");
});

fs.readFile("fs.text", "utf8", (error, data) => {
  if (error) {
    console.log("Can not read file");
    return;
  }
  console.log(data);
});
