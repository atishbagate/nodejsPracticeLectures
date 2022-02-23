const { default: mongoose } = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Test_DB");

const prodSch = new mongoose.Schema({
    name:String,
    class:String,
    city:String
},{ collection : 'list' });

const main = async() =>{
    const Prod = mongoose.model("list",prodSch);
    let data = new Prod({name:"papper",class:"Stark industries",city:"New york"});
    const res = await data.save();
    console.log((res));
}
// main();
const updateData = async() =>{
    const prod = mongoose.model("list",prodSch);
    let data = await prod.updateOne(
        {name:"papper"},
        {
            $set:{name:"papper Pots"}
        }
    )
    
    console.log(data);
}
// updateData();

const DeleteData = async () => {
    const prod = mongoose.model("list",prodSch);
    let data = await prod.deleteOne(
        {name:"kalpesh"}
    )
    console.log(data);
}
// DeleteData();

const FindData = async () => {
    const prod = mongoose.model("list",prodSch);
    let data = await prod.find()
    console.log(data);
}
FindData();
