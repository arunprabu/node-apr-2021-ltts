const fs = require('fs');

let writableText = 'My first file writing example';

fs.writeFile('sample.txt', writableText, (err) => {
  if(!err){
    console.log('File Writing is over!');
  }else{
    console.log(err);
  }
});

console.log('Program Ended');