// use of middleware 
// type of middleware : ->
//  route level
//  single route level 
//  group route middleware
const express = require('express');
const exp = require('express'); 
const reqMiddle = require('./middleware');
const app = exp();

// for group routing 
const route = express.Router();

app.set('view engine','ejs');

//using middleware ->
// app.use(reqMiddle)

// using middleware for group routes
route.use(reqMiddle)

app.get('/profile',reqMiddle,(_,resp)=>{
    resp.send('profile')
})
app.get('/login',(_,resp)=>{
    resp.send('login')
})
route.get('/home',(_,resp)=>{
    resp.send('home')
})
route.get('/contact',(_,resp)=>{
    resp.send('contact')
})
app.use('/',route)


app.listen(8000);