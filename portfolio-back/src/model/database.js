const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.CONNECT_DB;

const client = new MongoClient(uri);

module.exports = client;