const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function callDB(){
    let response = await client.connect();
    let db = response.db('Test_DB');
    let collection = db.collection("list");
    return collection;
   
}

module.exports = callDB;