const express = require("express");
const db = require("../data/connection");

const router = express.Router();

//GET all entries for a user
router.get("/", (req, res) => {
    res.send("<h1>Get all entries</h1>");
})

module.exports = router;