const express = require("express");
const db = require("../data/db-helper");

const router = express.Router();

//GET all users
router.get("/", (req, res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json({ users: users });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

//GET a specific user
router.get("/:id", (req, res) => {
    db.findUserById(req.params.id)
        .then(user => {
            res.status(200).json({ [user.username]: user });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

//GET a user's entries
router.post("/:id/entries", (req, res) => {

})

module.exports = router;