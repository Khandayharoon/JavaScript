// call back function simple examples

function greet(whish){
    console.log(`${whish()} , wellcome to the JavaScript world`);
}

function sayHi(){
    return 'Hi';
}

function sayHello(){
    return 'Hello';
}

function SayMorning(){
    return 'Good Morning';
}
function SayNewWorld(){
    return 'Oh new world there';
}

greet(sayHi);
greet(sayHello);
greet(SayMorning);
greet(SayNewWorld);