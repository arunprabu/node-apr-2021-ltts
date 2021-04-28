const fs =  require('fs'); // importing file system module

// read file from the file system
// reading the file synchronously
// also called as blocking I/O 
let data = fs.readFileSync('demo.txt');  // blocks here until file is read

// will print it in log 
console.log(data.toString());

// this will be printed at last
console.log('Program Ended');