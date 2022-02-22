
const dbConnect = require('../dbConnect');
module.exports = async (req,res) =>{
let data = await dbConnect();
data = await data.find().toArray();
console.log(data);
res.send(JSON.stringify({data}))
}
