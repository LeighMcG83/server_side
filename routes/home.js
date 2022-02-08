// import express js and the router class
const express = require('express');
const router = express.Router();


// route handlers
router.get('/', function (req, res) {
    res.render('home');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});


// export the router
module.exports = router;
