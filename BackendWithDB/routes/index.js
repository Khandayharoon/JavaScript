var express = require('express');
var router = express.Router();
const userModel =  require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res, next) {
  const user = await userModel.create({
    userName: "Haroon Khanday",
    name: "Sufi",
    age: 24
  });
  const user2 = await userModel.create({
    userName: "sufi Khanday",
    name: "Sufi khanday",
    age: 24
  });
  // res.send(user);
  // res.send(user2);
  res.send([user, user2]);
});

router.get('/find', async(req,res,next)=>{
  const findUser = await userModel.find();
  res.send(findUser);
});

router.get('/findone', async(req,res,next)=>{
  const findOneUser = await userModel.findOne({userName:"Haroon Khanday"});
  res.send(findOneUser);
});

router.get('/delete', async (req, res, next) => {
  const deletedUser = await userModel.findOneAndDelete({ userName: "sufi Khanday" });
  res.send(deletedUser);
});
module.exports = router;
