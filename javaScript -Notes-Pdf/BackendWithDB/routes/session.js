var express = require('express');
var router = express.Router();

router.get('/cs', (req, res) => {
    req.session.sessionName = 'iAmSession';
    res.send('Session has been created');
});

router.get('/checkcs', (req, res) => {
    console.log(req.session);
    res.send('please check console');
});

module.exports = router;
