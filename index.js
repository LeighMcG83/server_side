const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.type('text/plain');
    res.send('Covid Holiday Tours');
});

// app.get('/about',  (req, res) => {
//     res.type('text/plain');
//     res.send('About Our Holidays');
// });

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/contact',  (req, res) => {
    res.type('text/plain');
    res.send('Don\'t bother we never reply');
});

app.get('/help', (req, res) => {
    res.type('text/plain');
    res.send('Good help is hard to find....Keep looking!!');
});

// custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!!`));