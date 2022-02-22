const { load } = require('nodemon/lib/config');
const DBmodule = require('./dbConnectionModule')

// this is promise method to get the Data
//  from module function 
// DBmodule().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

// this is the function used by async await method 
const callingFun = async () =>{
    let data = await DBmodule();
    console.log("first data - ",data);
    data = await data.find().toArray();
    console.log("second data - ",data);
}

callingFun(); 