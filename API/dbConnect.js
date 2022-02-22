const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function callDB(){
    let resp = await client.connect();
    let db = resp.db('Test_DB');
    let collection = db.collection("list");
    return collection;
}

module.exports = callDB;