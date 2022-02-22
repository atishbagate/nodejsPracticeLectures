const { load } = require('nodemon/lib/config');
const DBmodule = require('./dbConnectionModule')

//  for insert one data 
// this is the function used by async await method  
// const callingFun = async () =>{
//     let data = await DBmodule(); 
//     data = await data.insertOne({
//         name:"harry",
//         city:"goregaon"
//     });
//     console.log("saved data - ",data);

// }
// inserting many data attributes 
const callingFun = async () =>{
    let data = await DBmodule(); 
    data = await data.insertMany([{
        name:"harry",
        city:"goregaon"
    },
    {
        name:"harry",
        city:"goregaon"
    }]);
     
    console.log("saved data - ",data);

}

callingFun(); 