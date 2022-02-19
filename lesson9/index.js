//  importing file system module 
 const { contentType } = require('express/lib/response');
const fs = require('fs');
//  importing path module 
 const path = require('path');
//getting the current dir path 
 const dirPath = path.join(__dirname,'crud');
 
//  step 1 -> creating the file 
//  fs.writeFileSync(`${dirPath}/apple.txt`,'this is simple text file.','utf8',(err)=>{
//      if (err) {
//          console.log("file not created -> ",err);
//      }
//                console.log("file creted successfully. ");
 
//  });


//  step 2 -> reading the file 
//  fs.readFile(`${dirPath}/apple.txt`,'utf-8',(err,item)=>{
//      if(err){
//         console.log('item error occures ',err);
//      }
//      else{
//         console.log(item);
//      }
//  })

// step 3 => Update file content
// fs.appendFile(`${dirPath}/apple.txt`," data is appended ",(err)=>{
//     if (err) {
//         console.log("file error occured => ",err);
//     }
//     else{
//         console.log("file updated properly . ");

//     }
// })

// step 4 -> rename the file 
// fs.rename(`${dirPath}/apple.txt`,`${dirPath}/Renamed.txt`,(err)=>{
//     if (err) {
//                 console.log("file error occured => ",err);
//             }
//             else{
//                 console.log("file renamed properly . ");
        
//             }
// })

// step 5 -> delete the file
// fs.unlinkSync(`${dirPath}/Renamed.txt`);

//to check the state of file 
// fs.stat(`${dirPath}/apple.txt`,(err,stats)=>{
//     if(err){
//         console.log("error occured -> ",err);
//     }
//     else{
//         console.log("is file -> ",stats.isFile());
//         console.log("file state recived",stats);
//     }
// });