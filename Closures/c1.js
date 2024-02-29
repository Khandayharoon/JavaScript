function outer(){
    let outerVariale = "i am in the outer Function";

    function inner(){
        console.log(outerVariale);
    }
    return inner;
}

const keeep =  outer();
keeep();