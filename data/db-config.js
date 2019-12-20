require('dotenv').config();

const knex = require("knex");

const knexConfig = require("../knexfile.js");

const dbEnv = process.env.ENVIROMENT|| 'development'

module.exports = knex(knexConfig[ dbEnv ]);
