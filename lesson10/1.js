
  
 
const path = require('path');
//  console.log(process.env.PATH.split(path.delimiter));

 //normalization => checks .. , \\, etc etc
console.log(path.normalize(`C:\\Users\\atish\\AppData\\Local\\Programs\\Microsoft VS Code\\bin`));
// join the paths 
console.log("join the paths -> "+path.join('C:\\Windows\\System32\\Wbem','C:\\Users\\atish\\AppData\\Local\\Microsoft\\WindowsApps'));

// it resolve the path of file 
console.log('resolve : ' + path.resolve('1.js'));  


// is absolute path  check it 
console.log(path.isAbsolute('F:\Node.js TutorialsPoint\lesson10\1.js'));
// console.log(path.isAbsolute('lesson10\1.js'));

//path will return on object usign parse
console.log(path.parse('/home/user/dir/file.txt'));
 

// posix -> The Portable Operating System Interface (POSIX) is a family of standards specified
//  by the IEEE Computer Society for maintaining compatibility between operating systems.

const path2 = require('path/posix');
console.log('resolve : ' + path2.resolve('1.js'));  