const { load } = require('nodemon/lib/config');
const DBmodule = require('./dbConnectionModule')

//  for delete one data 
// this is the function used by async await method  
// const callingFun = async () =>{
//     let data = await DBmodule(); 
//     data = await data.deleteOne({
//         name:"movie"
//         });
//     console.log("saved data - ",data);

// }
// update many data attributes 
const callingFun = async () =>{
    let data = await DBmodule(); 
    data = await data.deleteMany({name:"harry"});
         console.log("saved data - ",data);

}

callingFun(); 