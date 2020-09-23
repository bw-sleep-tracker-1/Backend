const express = require("express");
const db = require("../data/db-helper");

const router = express.Router();

//GET all entries for a user
router.get("/", (req, res) => {
    db.getEntries()
        .then(entries => {
            res.status(200).json({ entries: entries });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

module.exports = router;