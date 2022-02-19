// creating server and listening and on event 
const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.write("haii from write")
    res.end(JSON.stringify({
        data:"hello From server to client"
    }))
})
server.on('connection',(socket)=>{
    console.log("new connection......");
})
server.listen(8000);
console.log("on port 8000......");