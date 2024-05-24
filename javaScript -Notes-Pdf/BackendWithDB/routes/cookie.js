var express = require('express');
var router = express.Router();

router.get('/setcookie',(req,res)=>{
    res.cookie("age",24);
    res.send('cookie has been set');
});

module.exports = router;