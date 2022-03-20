const express = require('express');
const { accepts } = require('express/lib/request');
const fs = require('fs');
const app = express();

app.get("/video",(req,res)=>{
    const range = req.headers.range; //to get the range from vedio postition.
    const videoPath = './basketball.mp4';
    const videoSize = fs.statSync(videoPath).size; //to check the size. 

    const chunkSize = 1 * 1e+6;
    const start = Number(range.replace(/\D/g,''));
    const end = Math.min(start+chunkSize,videoSize - 1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range":`bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges":"bytes",
        "Content-Length":contentLength,
        "Content-Type":"video/mp4"
    }
    res.writeHead(206,headers);

    const stream = fs.createReadStream(videoPath,{start,end})
    stream.pipe(res);
});

app.listen('3000');