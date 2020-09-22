// const knex = require('knex');
// const config = require('../knexfile.js');
// const dbEnv = process.env.DB_ENV || 'development';
// module.exports = knex(config[dbEnv]);

const knex = require("knex");
const knexfile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

const config = knexfile[environment];

module.exports = knex(config);