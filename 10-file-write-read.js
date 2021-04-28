const fs = require('fs');

let writableText = 'My file writing example to read file asyncly';


fs.writeFile('dummy.txt', writableText, (err) => {
  if(!err){
    console.log('File Writing is over!');
    
    // reading file in non-blocking way
    fs.readFile('dummy.txt', (_err, data) => {
      // once the file is completely read it will call the callback fn
      if(!_err){
        console.log(data.toString());
      }else{
        console.log(_err);
      }
    });

  }else{
    console.log(err);
  }
});


// TODO: Write File and upon successful writing, emit event 'WRITING_OVER' to read file.
// Read the same file. upon successful file reading, emit 'READING_OVER'. 
// and pass the fetched data to the custom event callback 