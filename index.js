const express = require('express');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');


const connectionString = 'mongodb://127.0.0.1:27017/SS2022';

// import
// const newsMiddleware = require('express/lib/respnse');

// import the router from the home.js file
const home = require('./routes/home');
const staff = require('./routes/staff');

// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main'
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

mongoose.connect(connectionString, {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
}).
catch(error => {
    console.log('Database connection refused' + error);
    process.exit(2);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("DB connected");
});


// middleware 
// app.use(cookieParser());
app.use(cookieParser("una is great"));
app.use('/', home);
app.use('/staff', staff);

// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!!`));