// import express js and the router class
const express = require('express');
const router = express.Router();


var data = {
    "foil": {
        "name": "foil",
        "dob": "01/01/1998",
        "imageurl": "/images/logo.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "leigh": {
        "name": "Leigh",
        "dob": "09/11/1983",
        "imageurl": "/images/batman.jpg",
        "hobbies": ["Reading", "Philosophy", "Design"]
    },
    "paddy": {
        "name": "Paddy",
        "dob": "01/12/2022",
        "imageurl": "/images/paddy.jpg",
        "hobbies": ["Cooking", "Gaming", "Football"]
    }
};


// router.get('/foil', (req, res) =>
//     res.render('person', {
//         person: data.foil
//     }));

// router.get('/leigh', (req, res) =>
//     res.render('person', {
//         person: data.leigh
//     }));

// router.get('/paddy', (req, res) =>
//     res.render('person', {
//         person: data.paddy
//     }));

router.get('/:name', (req, res) => {
    var name = req.params.name;
    res.render('person', {
        person: data[name]
    })
})


router.get('/', (req, res) =>
    res.render('staff', {
        staff: data
    }));

module.exports = router;