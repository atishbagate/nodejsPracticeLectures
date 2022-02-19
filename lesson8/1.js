const fs = require('fs');
// fs.writeFileSync('hello.txt','this is the first file.');
const path = require('path');
const dirPath = path.join(__dirname);
console.log("dir path ",dirPath);

// for (let i = 0; i < 4; i++) {
//     // to create a file 
//     fs.writeFileSync(`hello${i}.txt`,`It is a sample file ${i}`);
// }

// to read a files 
fs.readdir(dirPath,(err,files)=>{
    files.forEach(element => {
        console.log("file name is -> ",element);
    });
})