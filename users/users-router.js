const express = require("express");
const db = require("../data/connection");

const router = express.Router();

//GET all users
router.get("/", (req, res) => {
    res.send("<h1>Get all users endpoint</h1>");
})

//GET a specific user
router.get("/:id", (req, res) => {
    res.send("<h1>Get a specific user endpoint</h1>");
})

module.exports = router;