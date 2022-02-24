// all API methods in Node.js using mongoose
const express = require('express'); 
const { default: mongoose } = require('mongoose');

// importing DB connection file  connection only once.
require('./config');

//importing Mongoose Schema File.
const Product = require('./Product');

const app = express();

// this is use to recive the data using json format. 
// every response send 
app.use(express.json())


app.post("/create", async (req,res) => {
    const data = new Product(req.body);
    const result = await data.save();
    console.log(result);
    res.status(200).send(result)
});

app.get("/list",async  (req,res)=>{
    const data = await Product.find();
    res.send(data);
})

app.delete("/delete/:_id",async  (req,res)=>{
    let data = await Product.deleteOne(req.params);
     console.log(req.params);
    res.send(data);
})

app.put("/update/:_id", async (req,res)=>{
    let data = await Product.updateOne(
        req.params,
        {$set:req.body}
    );
     console.log(req.params);
    res.send(data);
})

app.listen(8000);