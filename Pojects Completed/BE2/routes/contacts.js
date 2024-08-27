const express = require("express");
const router = express.Router();

router.get("/", function( req, res){
    // res.send("<h1>CONTACTS</h1>")
    res.render("contacts")
});

module.exports = router;