// import express js and the router class
const express = require('express');
const router = express.Router();


// route handlers
router.get('/', function (req, res) {
    var message = "";
    console.table(req.cookies);
    if (req.cookies.tracking) {
        // console.table('here');
        // console.table(req.cookies);
        var dateLastVisit = req.signedCookies.tracking;
        message = "Welcome back";
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toString(), {
        signed: true
    });

    res.render('home', {
        "message": message
    });
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});


// export the router
module.exports = router;