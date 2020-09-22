const db = require("./connection");

module.exports = {
    findUserByName,
    register
};

function findUserByName(username) {
    return db("users")
        .where("username", "=", username)
        .first();
}

function register(user) {
    return db("users")
        .insert(user);
}