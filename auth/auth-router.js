const express = require("express");
const db = require("../data/connection");

const router = express.Router();

// POST Registration endpoint
router.post("/register", (req, res) => {
    res.send("<h1>Registration endpoint</h1>");
})

// POST Login endpoint
router.post("/login", (req, res) => {
    res.send("<h1>Login endpoint</h1>");
})

module.exports = router;