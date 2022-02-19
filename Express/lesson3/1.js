const exp = require('express');
const path = require('path');

const app = exp();
// to get the path of html pages 
const pubPath = path.join(__dirname,'pages')
  app.get('',(_,resp)=>{
      resp.sendFile(`${pubPath}/index.html`)
  })
  app.get('/about',(_,resp)=>{
      resp.sendFile(`${pubPath}/about.html`)
  })
//   page not found page 
  app.get('*',(_,resp)=>{
      resp.sendFile(`${pubPath}/404.html`)
  })


app.listen(8000);