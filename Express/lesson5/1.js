// use of middleware 
const exp = require('express');
const res = require('express/lib/response');
const app = exp();

app.set('view engine','ejs');

//using middleware ->
const reqMiddle = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide the age")
    }
    else if(req.query.age<18){
        resp.send("your cannot enter. age is < 18")
    }
    else{
        next();
    }
}
app.use(reqMiddle)
app.get('/profile',(_,resp)=>{
    resp.send('profile')
})
app.get('/login',(_,resp)=>{
    resp.send('login')
})


app.listen(8000);