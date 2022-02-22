const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData() {
    let res = await client.connect();
   let db =  res.db('Test_DB');
   let collections = db.collection("list");
   let respose = await collections.find({}).toArray();
   console.log(respose);
}
getData();
