// creating server 
const http = require('http');
const sendFunction = (req,res)=>{
    res.write("<h1>Haiii from function </h1>");
    res.end();
}
http.createServer(sendFunction).listen(8000);