// import express js and the router class
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const { readStaff } = require('../models/staff');

router.get('/', async (req, res) => {
    const staff = await readStaff();

    res.render('listing', {
        personlist: staff
    });

})


router.get('/:name', async (req, res) => {
    var name = req.params.name;

    const person = await readStaff({'name': name})

    if (!person) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    }
    else {
        res.render('person', { person: person });
    }
})


module.exports = router;