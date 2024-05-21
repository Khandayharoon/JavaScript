// IIFE immediately invoked function expression
// an anonmousy function enclosed in () and calling/invoked immediately

(
    function(){
        console.log('i am IIFE Function');
    }
)();

// IIFE with arugemnts

(function(a,b){
    console.log(a+b);
})(10,10);

