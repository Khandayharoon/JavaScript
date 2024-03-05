var userName = 'HK';
var userAge = 20;

console.log(`User Name : ${userName}`);
console.log(`User Age: ${userAge}`);

function userGreet(Name){
    var greet = ',Hope you doing well!';
    console.log(`${Name}, ${greet}`);
    var currentYear = 2024;
    const bY = currentYear - userAge;
    return `Your Birth Year is : ${bY}`;
}
const BirthYear = userGreet(userName);
console.log(BirthYear);