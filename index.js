const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

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


// app.get('/',  (req, res) => {
//     res.type('text/plain');
//     res.send('Covid Holiday Tours');
// });

// app.get('/about',  (req, res) => {
//     res.type('text/plain');
//     res.send('About Our Holidays');
// });


app.get('/contact',  (req, res) => {
    res.type('text/plain');
    res.send('Don\'t bother we never reply');
});

app.get('/help', (req, res) => {
    res.type('text/plain');
    res.send('Good help is hard to find....Keep looking!!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!!`));