// function  retuning a function 

function greet(message){

    return function (wish){
        console.log(`${wish} , ${message}`);
    }
}

// one way to call/invoke above function
const greeting = greet('I hope you are doing well');
greeting('Hello');

//ANother way is 

greet('Welcome to the JavaScript Session')('Hey!');