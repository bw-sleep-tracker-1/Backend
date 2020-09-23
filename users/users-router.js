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
router.get("/:id/entries", (req, res) => {
    db.findEntriesByUserId(req.params.id)
        .then(entries => {
            res.status(200).json({ entries: entries });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

//POST an entry for a user
router.post("/:id/entries", (req, res) => {
    const entry = req.body;
    entry.user_id = req.params.id;
    if(entry.bedtime && entry.waketime && entry.wake_rating){
        const bedtime = new Date(entry.bedtime);
        const waketime = new Date(entry.waketime);
        const hours = (waketime - bedtime)/3600000;
        entry.hours = hours;
        db.addEntry(entry)
            .then(entry => {
                res.status(201).json({ message: "Entry created", entry: entry });
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    } else {
        res.status(400).json({message: "Missing info: a new entry must include a bedtime, waketime, & wake_rating" });
    }
})

module.exports = router;