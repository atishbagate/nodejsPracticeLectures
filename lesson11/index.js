// event Emmiter in node.js 
// https://nodejs.dev/learn/the-nodejs-events-module

const express = require("express");
const EventEmitter = require("events");
const app = express();

const event = new EventEmitter();
let count = 0;
event.on("countAPI",()=>{   
    count++;
    console.log("event called count is => ",count);
})

app.get("/",(req,res)=>{
    res.send("api called...")
    event.emit("countAPI");
});
app.get("/search",(req,res)=>{
    res.send("search api called...")
    event.emit("countAPI");
});
app.get("/find",(req,res)=>{
    res.send("find api called...")
    event.emit("countAPI");
});

app.listen(8000);