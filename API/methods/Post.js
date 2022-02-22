 
const dbConnect = require('../dbConnect');
 
module.exports = async (req,res) =>{
let data = await dbConnect();
const datasave = await data.insertOne(req.body) ; 
console.log(datasave);
res.send({datasave})
}
