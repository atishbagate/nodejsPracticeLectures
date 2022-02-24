// how to upload file inside nodemon.js
// using multer package 
// multer handles the response data from frontend


const { response } = require('express');
const express = require('express'); 
const { default: mongoose } = require('mongoose');
const multer = require('multer');
const nodemon = require('nodemon')

// importing DB connection file  connection only once.
require('./config');

//importing Mongoose Schema File.
const Product = require('./Product');

const app = express();

// this is use to recive the data using json format. 
// every response send 
app.use(express.json())

const upload = multer({
storage: multer.diskStorage({
    destination:function(request,response,calllback){
        calllback(null,"uploads")
    },
    filename:function(request,response,calllback){
        calllback(null, response.fieldname +"-"+ Date.now() + ".jpg");
    }
})
}).single("send_file")

//  for single field searcing -> to search for name Filed 
app.post("/upload",upload,async (req,res)=>{
    // let data = await  
    res.send("data recived");
})
 
app.listen(8000);