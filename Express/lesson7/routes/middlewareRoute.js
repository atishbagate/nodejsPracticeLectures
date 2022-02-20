const express = require('express');
let route = express.Router();

const middle = (req,res,next) =>{
    console.log("middleware is used inside the route module.");
    next();
}
route.use(middle);
route.route("/middlewareUsePath")
.get((req,res)=>{
    res.send('you send the get request inside middleware the exported module on this path.')
})
.post((req,res)=>{
    res.send("you send the post request the imddleware exported module on this path.")
})
module.exports = route;