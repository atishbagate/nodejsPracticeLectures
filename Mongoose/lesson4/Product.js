const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
name:String,
school:String,
city:String
},{ collection : 'list' });

module.exports = mongoose.model('list',productschema);