// import express js and the router class
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
//const mongoose = require('mongoose')

const { readStaff } = require("../models/staff");

router.get("/", async (req, res) => {
  const staff = await readStaff();

  res.render("listing", {
    personlist: staff,
  });
});

// to edit we first need to fetch the data so we can display in on
// a form to be edited

router.get("/", async (req, res) => {
  const staff = await readStaff();
  var newName;

  if (req.session.staffdata) {
    newName = req.session.staffdata.name;
  } else {
    newName = "";
  }
  res.render("listing", { personlist: staff, newName: newName });
});

router.post("/addnew", async (req, res) => {
  await createStaff(req.body);

  req.session.flash = {
    type: "success",
    intro: "Data Saved:",
    message: "Data for <strong>" + req.body.name + "</strong> has been added",
  };
  res.redirect(303, "/staff");
});

router.get("/:name/edit", async (req, res) => {
  var name = req.params.name;

  const person = await readStaff({ name: name });

  if (!person) {
    console.log("404 because person doesn't exist");
    res.render("404");
  } else {
    res.render("personeditform", { person: person });
  }
});

router.post("/:name/edit", async (req, res) => {
  await updateStaff(req.body);

  req.session.flash = {
    type: "success",
    intro: "Data Updated:",
    message: "Data for <strong>" + req.body.name + "</strong> has been updated",
  };

  res.redirect(303, "/staff");
});

router.get("/addnew", async (req, res) => {
  res.render("personform");
});

router.post("/addnew", async (req, res) => {
  await createStaff(req.body);

  req.session.flash = {
    type: "success",
    intro: "Data Saved:",
    message: "Data for <strong>" + req.body.name + "</strong> has been added",
  };
  res.redirect(303, "/staff");
});

router.get("/:name", async (req, res) => {
  var name = req.params.name;

  const person = await readStaff({
    name: name,
  });

  if (!person) {
    console.log("404 because person doesn't exist");
    res.render("404");
  } else {
    res.render("person", {
      person: person,
    });
  }
});

// no error checking for now.
//
router.get("/:name/delete", async (req, res) => {
  var name = req.params.name;

  await deleteStaff(name);

  res.redirect(303, "/staff");
});

router.post("/:name/delete", async (req, res) => {
  await deleteStaff(req.body.name);

  req.session.flash = {
    type: "success",
    intro: "Data Deleted:",
    message: "Data for <strong>" + req.body.name + "</strong> has been deleted",
  };

  res.redirect(303, "/staff");
});

module.exports = router;
