
const dbConnect = require('../dbConnect');
module.exports = async (req,res) =>{
let data = await dbConnect(); 
let result = await data.updateOne(
    {name:req.body.name},
    {$set:req.body}
)
console.log(req.body);
res.send(result)
}
