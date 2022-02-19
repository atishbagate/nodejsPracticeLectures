var http = require("http");

http.createServer(function(req,res){
    Response.writeHead(200,{'Content-Type':'text/plain'});
    Response.end("Hello World\n");
}).listen(8081);
console.log("server running");
const name = 'John';  
console.warn(`Don't mess with me ${name}! Don't mess with me!`);   