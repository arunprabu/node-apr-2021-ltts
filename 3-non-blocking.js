// working file system to read file async'ly 
// non-blocking I/O
const fs = require('fs'); 

// reading file in non-blocking way
fs.readFile('demo.txt', function(err, data) {
  // once the file is completely read it will call the callback fn
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

// this will be printed first --- while file is being read
console.log('Program Ended');