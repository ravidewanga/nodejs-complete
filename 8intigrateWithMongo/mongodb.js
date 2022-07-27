const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecom';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('users');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}
module.exports = dbConnect;