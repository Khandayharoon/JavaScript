let count = 5;

let counter = setInterval(timer , 1*1000);

function timer (){
    if(count === 0){
        clearInterval(counter);
        // clearInterval is a method which accept which interval you want break;
    }
    console.log(count);
    count = count -1;
}