const exp = require('express');
const path = require('path');

const app = exp();

const pubPath = path.join(__dirname,'pages')
 
app.use(exp.static(pubPath));


app.listen(8000);