function power(b){
    return function(a){
        return a**b;
    };
}

const  square = power(2);
console.log( square(5));
console.log( square(4));
console.log( square(110));
console.log( square(100));
console.log( square(1));