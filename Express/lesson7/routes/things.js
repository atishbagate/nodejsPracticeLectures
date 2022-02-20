const express = require('express');
let route = express.Router();

route.route("/homePage")
.get((req,res)=>{
    res.send('you send the get request inside the exported module on this path.')
})
.post((req,res)=>{
    res.send("you send the post request the exported module on this path.")
})
module.exports = route;