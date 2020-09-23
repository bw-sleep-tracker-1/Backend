const db = require("./connection");

module.exports = {
    getUsers,
    findUserById,
    findUserByName,
    getEntries,
    register
};

function getUsers() {
    return db
        .select("user_id", "username", "email", "first_name", "last_name")
        .from("users");
}

function findUserById(id) {
    return db.select("user_id", "username", "email", "first_name", "last_name")
        .from("users")
        .where("user_id", "=", id)
        .first();
}

function findUserByName(username) {
    return db("users")
        .where("username", "=", username)
        .first();
}

function getEntries() {
    return db("entries");
}

function register(user) {
    return db("users")
        .insert(user);
}