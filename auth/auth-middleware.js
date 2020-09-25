const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || "super secret code goes here";
    try {
        const decoded = jwt.verify(token, secret);
        if (decoded) {
            next();
        }
    } catch {
        res.status(401).json({ message: "You're not logged in!" });
    }
}