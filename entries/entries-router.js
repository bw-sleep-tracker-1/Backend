const e = require("express");
const express = require("express");
const { updateEntry } = require("../data/db-helper");
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
    const changes = req.body;
    changes.entry_id = req.params.id;
    if(changes.bedtime && changes.waketime){
        const bedtime = new Date(changes.bedtime);
        const waketime = new Date(changes.waketime);
        const hours = (waketime - bedtime)/3600000;
        changes.hours = hours;
        db.updateEntry(changes, req.params.id)
        .then(updated => {
            res.status(200).json({ updated: updated });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
    } else {
        res.status(400).json({ message: "An entry must have a bedtime & waketime" });        
    }
})

//DELETE a specific entry
router.delete("/:id", (req, res) => {
    db.deleteEntry(req.params.id)
        .then(deleted => {
            res.status(200).json({ deleted: deleted });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
})

module.exports = router;