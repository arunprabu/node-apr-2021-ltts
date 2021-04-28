// importing events module
const events = require('events');

let eventEmitter = new events.EventEmitter(); // creating an obj for EventEmitter class

// Defining Custom event - OPEN_CONNECTION
eventEmitter.on('OPEN_CONNECTION', function(err, data) {
  if(!err){
    console.log(data);
  }else{
    console.log(err);
  }
});

// Custom event can be exec by emitting the same event
eventEmitter.emit('OPEN_CONNECTION', null, 'Connection Opened'); // null is error
