const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../data/db-helper");

const router = express.Router();

// POST Registration endpoint
router.post("/signup", (req, res) => {
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
    let { username, password } = req.body;
    if(username && password){
        db.findUserByName(username)
            .then(found => {
                if(found && bcrypt.compareSync(password, found.password)){
                    const token = generateToken(found);
                    res.status(200).json({
                        message: `${found.username} is now logged in.`,
                        token: token
                    });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(err => {
                res.status(500).json({ err: err.message });
            });
    } else {
        res.status(400).json({ message: "Please provide both a username & password" }); 
    }
})

function generateToken({ user_id, username }) {
    const payload = {
        subject: user_id,
        username: username
    };

    const secret = process.env.JWT_SECRET || "super secret code goes here";

    const options = {
        expiresIn: "8h"
    }

    return jwt.sign(payload, secret, options);
}

module.exports = router;