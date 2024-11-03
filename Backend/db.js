// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
const dbName = 'MyPortfolio';

let client;

async function connectDatabase() {
    try {
        client = await MongoClient.connect(uri);
        console.log('Connected to the database');
        return client.db(dbName);

    } catch (error) {
        console.error('Error connecting to the database ==>>', error);
    }
}

function getDatabase() {
    return client.db(dbName);
}

module.exports = { connectDatabase, getDatabase };
