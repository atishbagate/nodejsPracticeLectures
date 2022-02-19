// how to import and export in node .js

const mod = require('./module')
// taking all values from module 
console.log(mod);
// reciving function 
console.log(mod.z());

// Q-> What is Filter ->
let arr = [1,2,3,4,5,6,7,8,9];
      let op =   arr.filter((item)=>{
          if (item%3 == 0) {
            return item;
          }
        })
        console.log(op);