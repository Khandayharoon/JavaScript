//IIFE with return and nested function

const user = (function(){
    const user = {
        userName:'jhon',
        userAge:20
    }
    // above user object can't access outside if iife if i willl not return it 
    function getName(){
        console.log(user.userName);
    }
    function getAge(age){
        console.log(user.userAge + age);
    }

    return {getName:getName,getAge:getAge}
    // if propety name and value name is we can also return likr
    //  return {getName,getAge}
})();

console.log(user);
user.getAge(4);
user.getName();

//abvooe concept of IIFE willl hhelp us to create private membres