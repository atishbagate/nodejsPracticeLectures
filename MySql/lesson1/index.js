const express = require('express');
const app = express(); 
const mysql = require('mysql'); 

app.use(express.json());

// connection to data base 
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});
con.connect((err)=>{
    if(err){
        console.log("error.... ");
    }
    else{
        console.log("connected.... ");
    }

});

// this is get method  code 
app.get('/',(req,res)=>{
let createTodos = `select * from  userss`;
con.query(createTodos,(err,resp,fields) => {
   if(err) {
       console.log(err);
       res.send(err);
   }
   else{
       console.log(resp);
       res.status(202).send(resp);
   }   
}) 
});

// post method using data from req.body 
app.post("/",(req,resp)=>{
    const data = req.body;
    let createTodos = `INSERT INTO userss SET ?`;
    con.query(createTodos, data, function (error, results, fields){
        if(error) {
            console.log(error);
            resp.send(error);
        }
        else{
            console.log(results);
            resp.status(200).send(results);
        }   
    }
    )
});

//put method -> update method
app.put("/:id",(req,resp)=>{
    const data = [req.body.name,req.params.name];
    console.log(data);
    let queryString = `UPDATE userss SET Name = ? WHERE  Name = ?`;
    con.query(queryString, data, function (error,results,fields){
        if(error) {
            console.log(error);
            resp.send(error);
        }
        else{
            console.log(results);
            resp.status(200).send(results);
        }  
    })
})

//delete API 
app.delete("/:id",(req,resp)=>{
    con.query("DELETE FROM userss WHERE id ="+req.params.id,(error,results,fields)=>{
        if(error) {
            console.log(error);
            resp.send(error);
        }
        else{
            console.log(results);
            resp.status(200).send(results);
        }  
    })
})


app.listen(5000);

