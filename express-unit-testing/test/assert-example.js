// we are using node-js native assert module
// exec this file by the following command 
// node test/assert-example.js
const assert = require('assert');

assert.strictEqual(1, 1, "Not Equal"); // won't show any log -- as it is passed

// the following will show 'Not Equal' in console
// assert.strictEqual(1, 10, "Not Equal"); 

//if we want more assertion methods / api's we can use chai
// chai provides api's such as expect, should, assert.