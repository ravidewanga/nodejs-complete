const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'ecom';

const dbConnect = async () =>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');
    return collection;
}

module.exports = dbConnect;