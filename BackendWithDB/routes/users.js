// require or import mangoose

const mongoose = require('mongoose');

//connnecting mongoose 
mongoose.connect('mongodb://127.0.0.1:27017/myfirstdb');

const userschema = mongoose.Schema({
  userName: String,
  name: String,
  age: Number
});


usermodel =  mongoose.model("userCollection", userschema);
module.exports = usermodel;





































































// var express = require('express');
// var router = express.Router();
// const mangoose =  require(mangoose);

// //connection to mogodb
// mangoose.connect("mongodb://127.0.0.1:27017/myfirstdb");



// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
