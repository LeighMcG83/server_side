// import express js and the router class
const express = require('express');
const router = express.Router();



// route handlers
router.get('/', function (req, res) {
    var message = "";
    const linksForHome = [{
            url: 'itsligo.ie',
            text: 'IT Sligo Home Page'
        },
        {
            url: 'irishtimes.ie',
            text: 'The Irish Times'
        }
    ];
    console.table(req.cookies);
    if (req.signedCookies.tracking) {
        // console.table('here');
        // console.table(req.cookies);
        var dateLastVisit = req.signedCookies.tracking;
        message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toUTCString(), {
        signed: true
    });

    res.render('home', {
        "message": message,
        "links": linksForHome
    });
});

router.get('/about', function (req, res) {
    const linksForAbout = [{
            url: 'linked.com',
            text: 'LinkedIn'
        },
        {
            url: 'behance.com',
            text: 'Behance'
        }
    ];
    res.render('about', {
        "links": linksForAbout
    });

    router.get('/contact', function (req, res) {
        res.render('contact');
    });
});
// export the router
module.exports = router;