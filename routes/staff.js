// import express js and the router class
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


var data = {
    "foil": {
        "name": "foil",
        "dob": "01/01/1998",
        "imageurl": "/images/logo.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "Leigh": {
        "name": "Leigh",
        "dob": "09/11/1983",
        "imageurl": "/images/batman.jpg",
        "hobbies": ["Reading", "Philosophy", "Design"]
    },
    "Paddy": {
        "name": "Paddy",
        "dob": "01/12/2022",
        "imageurl": "/images/paddy.jpg",
        "hobbies": ["Cooking", "Gaming", "Football"]
    }
};

router.get('/', (req, res) =>
    res.render('staff', {
        staff: data
    }));


router.get('/:name', (req, res) => {
    var name = req.params.name;
     
    // console.log(name);
    // console.table(data[name]);
    if (!data[name]) {
        res.status(404);
        res.render('404');
    }
    else{
        res.render('person', {
            person: data[name]
        });
    }
});

module.exports = router;