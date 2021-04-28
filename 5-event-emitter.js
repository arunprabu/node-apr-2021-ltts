// 1. emit OPEN_CONNECTION  and print a log 'connection opened' 
// 2. upon OPEN_CONNECTION is fired, emit DATA_RECEIVED and pass data
// 3. and receive the data within 'DATA_RECEIVED'  

// importing events module
const events = require('events');

let eventEmitter = new events.EventEmitter(); // creating an obj for EventEmitter class

// Defining Custom event - OPEN_CONNECTION
eventEmitter.on('OPEN_CONNECTION', function(err, data) {
  if(!err){
    console.log(data);
    
    eventEmitter.on('DATA_RECEIVED', function(err, data) {
      if(!err){
        console.log(data);
      }else{
        console.log(err);
      }
    });
    
    eventEmitter.emit('DATA_RECEIVED', null, 'Success');
  }else{
    console.log(err);
  }
});

// Custom event can be exec by emitting the same event
eventEmitter.emit('OPEN_CONNECTION', null, 'Connection Opened'); // null is error
