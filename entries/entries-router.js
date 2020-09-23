const express = require("express");
const db = require("../data/db-helper");

const router = express.Router();

//GET all entries
router.get("/", (req, res) => {
    db.getEntries()
        .then(entries => {
            res.status(200).json({ entries: entries });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

//GET a specific entry
router.get("/:id", (req, res) => {
    db.findEntryById(req.params.id)
        .then(entry => {
            if(entry){
                res.status(200).json({ entry: entry });
            } else {
                res.status(404).json({ message: "Entry not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
})

//PUT(edit) a specific entry
router.put("/:id", (req, res) => {

})

//DELETE a specific entry
router.delete("/:id", (req, res) => {

})

module.exports = router;