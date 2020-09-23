const { where } = require("./connection");
const db = require("./connection");

module.exports = {
    getUsers,
    findUserById,
    findUserByName,
    getEntries,
    findEntryById,
    findEntriesByUserId,
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

function findEntryById(id) {
    return db("entries")
        .where("entry_id", "=", id)
        .first();
}

function findEntriesByUserId(id) {
    return db("entries")
        .where("user_id", "=", id);
}

function register(user) {
    return db("users")
        .insert(user);
}