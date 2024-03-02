/*  how to do Email Verification 
1: - Email length should be >11
2: - after dot . only 2 or 3 characters are allowed like (.com , .uk, .in) etc;
3:- minimun 3 charaters between @ and .;
*/
let email = 'haroon@gmail.com';

function verify(email){
    let length = email.length;
    console.log(length);
    let dot = email.lastIndexOf('.');
    console.log(dot);
    let at = email.indexOf('@');
    console.log(at);

    if(length > 11 && (length-1-dot <=3) && (dot-at>=3)){
        console.log("email is valid ")
    }else {
        console.log("email is not valid");
    }
}
verify(email);






// function verify(email){
//     let length = email.length;
//     let dot = email.lastIndexOf('.');
//     let at = email.indexOf('@');

//     // Check if '@' and '.' exist and are in valid positions
//     if(at < 1 || dot < at+2 || dot+2 >= length) {
//         console.log("email is not valid");
//         return;
//     }

//     // Check email length
//     if(length < 6 + dot) {
//         console.log("email is not valid");
//         return;
//     }

//     // Check domain length
//     let domainLength = length - dot - 1;
//     if(domainLength !== 2 && domainLength !== 3) {
//         console.log("email is not valid");
//         return;
//     }

//     console.log("email is valid");
// }

// let email = 'haroon@gmail.com';
// verify(email);
