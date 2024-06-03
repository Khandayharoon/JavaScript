let ToDoApp = [];

while(true){
    let req = prompt("Please Enter Your Request");
    
    if(req ==="Quit"){
        break;
    }

    if(req === "Add"){
        let task = prompt("Please Enter your Task");
        ToDoApp.push(task);
    }
    else if (req ==="List"){
        console.log("-------------------");
        for(i=0; i<ToDoApp.length; i++){
            console.log(i + " " + ToDoApp[i]);
        }
        console.log("-------------------");
    }
    else if (req === "Delete"){
        let index = prompt("please Enter Task number that you want to Delete");
        ToDoApp.splice(index,1);
        console.log("Task Deleted");
    }
    else {
        console.log("Wrong Request");
    }
}