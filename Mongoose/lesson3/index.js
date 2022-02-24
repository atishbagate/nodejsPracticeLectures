// serarch API using Node.js mongoose
// here we use the search Api result of two type 
// searching with one parameter/ field 
// searching with many parameters/ field 


const express = require('express'); 
const { default: mongoose } = require('mongoose')

// importing DB connection file  connection only once.
require('./config');

//importing Mongoose Schema File.
const Product = require('./Product');

const app = express();

// this is use to recive the data using json format. 
// every response send 
app.use(express.json())

//  for single field searcing -> to search for name Filed 
app.get("/search/:key",async (req,res)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
            { "name":{$regex:req.params.key}}
        ]
        },
    );
    res.send(data);
})
//  for multiple field searcing -> to search for name,city,class,job Filed 
app.get("/multisearch/:key",async (req,res)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
            { "name":{$regex:req.params.key}},
            { "school":{$regex:req.params.key}},
            { "city":{$regex:req.params.key}}, 
        ]
        },
    );
    res.send(data);
})

app.listen(8000);