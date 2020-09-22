const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../data/db-helper");

const router = express.Router();

// POST Registration endpoint
router.post("/register", (req, res) => {
    const user = req.body;
    if(user.username && user.password){
        db.findUserByName(user.username)
            .then(found => {
                if(found){
                    res.status(400).json({ message: "Username taken!" });
                } else {
                    const rounds = process.env.BCRYPT_ROUNDS || 4;
                    user.password = bcrypt.hashSync(user.password, rounds);
                    db.register(user)
                        .then(id => {
                            res.status(201).json({ message: "User registered", userId: id[0] });
                        })
                        .catch(err => {
                            res.status(500).json({ err: err.message });
                        });
                }
            })
            .catch(err => {
                res.status(500).json({ err: err.message });
            })
    } else {
        res.status(400).json({ message: "Please provide both a username & password" });
    }
})

// POST Login endpoint
router.post("/login", (req, res) => {
    res.send("<h1>Login endpoint</h1>");
})

module.exports = router;