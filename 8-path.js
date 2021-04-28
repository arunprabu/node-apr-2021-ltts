const path = require('path');

const fileName = __filename;
console.log(fileName);

const extn = path.extname(fileName);
console.log(extn); // prints the extn with . prefix

const baseName = path.basename(fileName);
console.log(baseName); // prints the filename with extn -- but not the directory