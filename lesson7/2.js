var fs = require('fs');
const { fileURLToPath } = require('url');
console.log("opening the File");
fs.open('input.txt','r+',(err,fd)=>{
    if (err) {
        return console.error("file error occures. -> ",err);
    }
    console.log("file opened successfully");
    console.log(fd);
    // here you can created your computations  reading writing file etc etc

    // at the end you have to close the file. manually.
    fs.close(fd,(err)=>{
        console.log("file is closed");
    })
})