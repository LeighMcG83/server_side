const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main'
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));


// REFACTORED INTO SINGLE JSON OBJECT
// var foil = {
//     "name": "foil",
//     "dob": "01/01/1998",
//     "imageurl": "/images/logo.png",
//     "hobbies": ["Jokes", "Gags", "Stand up"]
// };

// var leigh = {
//     "name": "Leigh",
//     // "dob": "09/11/1983",
//     "imageurl": "/images/logo.png",
//     "hobbies": ["Reading", "Philosophy", "Design"]
// };

// var paddy = {
//     "name": "Paddy",
//     "dob": "01/12/2022",
//     "imageurl": "/images/logo.png",
//     "hobbies": ["Cooking", "Gaming", "Football"]
// };

let data = {
    "foil": {
        "name": "foil",
        "dob": "01/01/1998",
        "imageurl": "/images/logo.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "leigh": {
        "name": "Leigh",
        // "dob": "09/11/1983",
        "imageurl": "/images/logo.png",
        "hobbies": ["Reading", "Philosophy", "Design"]
    },
    "paddy": {
        "name": "Paddy",
        "dob": "01/12/2022",
        "imageurl": "/images/logo.png",
        "hobbies": ["Cooking", "Gaming", "Football"]
    }
};

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/help', function (req, res) {
    res.render('help');
});

app.get('/contact', (req, res) => {
    res.type('text/plain');
    res.send('Don\'t bother we never reply');
});

app.get('/help', (req, res) => {
    res.type('text/plain');
    res.send('Good help is hard to find....Keep looking!!');
});

app.get('/foil', (req, res) =>
    res.render('person', {
        person: data.foil
    }));

app.get('/leigh', (req, res) =>
    res.render('person', {
        person: data.leigh
    }));

app.get('/paddy', (req, res) =>
    res.render('person', {
        person: data.paddy
    }));

// app.get('/foil', (req, res) => foil.name === "Leigh"
// res.render('person', {person: foil}));

// // 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

// // 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!!`));