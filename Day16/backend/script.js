const express = require('express');
const app = express();
const PORT = 3000;

app.use(function( req, res, next){
    console.log('middleware is running befor every rout')
    next();
});
app.set("view engine","ejs");
app.use(express.static("./public/"))
app.get('/', function ( req , res){
    res.send("i an on the Slash route");
});

app.get('/signup', function ( req , res){
    res.render("signup")
});

app.get('/home', function ( req , res){
    res.render("home")
});

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
})