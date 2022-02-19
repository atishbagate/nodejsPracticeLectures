module.exports =  (req,resp,next)=>{
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