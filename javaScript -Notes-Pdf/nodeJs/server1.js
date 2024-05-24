const express = require('express');
//create an instance of the Express application.
const app =  express();

//middleware (we can we multiple middleware)
app.use(function(req,res,next){
    console.log('i am middleware');
    //push the request with help of next
    next();
});
app.use(function(res,res,next){
    console.log('i am 2nd middleware');
    next();
});
//routes
app.get('/',function(req,res){
    res.send('i am in home page');
});
app.get('/login',function(req,res) {
    res.send('i am in login page');
});
app.get('/profile',function(req,res) {
    res.send('i am in profile page');
});
app.listen(3000);