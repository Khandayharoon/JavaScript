var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(userLoggedIn){
                resolve("User Logged In");
            }else{
                reject("user not Logged in");
            }
        },1000);
    });

    return promise;
}

checkUserLoggedIn().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

setTimeout(()=>{
    userLoggedIn = false;
    checkUserLoggedIn().then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
},4000);