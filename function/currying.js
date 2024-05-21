// currying in js

// Normal Function

function normalAdd(a,b,c){
    return a+b+c;
}
console.log(normalAdd(10,20,30));

//Curring 

function curryingAdd(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

console.log(curryingAdd(20)(40)(30));