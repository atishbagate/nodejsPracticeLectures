// use of Ejs temp engine. sending ejs pages and using components.
//  inside ejs file (header footer etc).
// sending list data inside ejs file and rendering it there 
const exp = require('express');
const { engine } = require('express/lib/application')
const path = require('path');

const app = exp();

 // to get the path of html pages 
const pubPath = path.join(__dirname,'pages')

// this is important to set the template engine 
app.set('view engine','ejs');
app.get('/profile',(_,resp)=>{
  const user = {
    name:"Atish",
    mail:"atish@gmail.com",
    list : ['node','php','python']
  }
  resp.render('profile',{user});
})
app.get('/login',(_,resp)=>{
  resp.render('login')
})


app.get('',(_,resp)=>{
  resp.sendFile(`${pubPath}/index.html`)
})
app.get('*',(_,resp)=>{
  resp.sendFile(`${pubPath}/404.html`)
})

app.listen(8000);