// import express js and the router class
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
//const mongoose = require('mongoose')

const {
    readStaff
} = require('../models/staff');


router.get('/', async (req, res) => {
    const staff = await readStaff();

    res.render('listing', {
        personlist: staff
    })

})

router.post('/addnew', async (req, res) => {

    // note we leave error handling for now and assume our data is created.
    // note: this is not safe code. Any inputs from a user should be validated and sanitised before
    // being saved to the database.

    await createStaff(req.body);

    res.redirect(303, '/staff')

});

router.get('/addnew', async (req, res) => {
    res.render('personform');
});

// no error checking for now.
//
router.get('/:name/delete', async (req, res) => {
    var name = req.params.name;

    await deleteStaff(name);

    res.redirect(303, '/staff');

});


router.get('/:name', async (req, res) => {
    var name = req.params.name;

    const person = await readStaff({
        'name': name
    });

    if (!person) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    } else {
        res.render('person', {
            person: person
        });
    }
});


module.exports = router;