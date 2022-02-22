const { load } = require('nodemon/lib/config');
const DBmodule = require('./dbConnectionModule')

//  for update one data 
// this is the function used by async await method  
// const callingFun = async () =>{
//     let data = await DBmodule(); 
//     data = await data.updateOne({
//         name:"harry"},{$set:{city:"latur"}});
//     console.log("saved data - ",data);

// }
// update many data attributes 
const callingFun = async () =>{
    let data = await DBmodule(); 
    data = await data.updateMany({name:"harry"},
    {$set:{city:"latur"}});
         console.log("saved data - ",data);

}

callingFun(); 