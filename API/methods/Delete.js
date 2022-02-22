
const dbConnect = require('../dbConnect');
module.exports = async (req,res) =>{
let data = await dbConnect(); 
let result = await data.deleteOne(
    {name:req.body.name},
)
console.log(req.body);
res.send(result)
}
