const express = require('express');
const { json } = require('express/lib/response');  

const app = express();
app.use(express.json());
// importing Get method
const GetData = require('./methods/Get')
// importing post method 
const PostData = require('./methods/Post')
// importing PUT method 
const PutData = require('./methods/Put')
// importing PUT method 
const DeleteData = require('./methods/Delete')

app.get('/', GetData)

app.post('/', PostData)

app.put('/', PutData)

app.delete('/', DeleteData)

app.listen(8000);