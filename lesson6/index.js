const http = require('http');
const data = require('./data');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify(data))
    res.end();
});
server.listen(8000);