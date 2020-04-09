var express = require('express');
var router = express.Router();
var path = require("path")

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
 });

router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
});

module.exports = router;