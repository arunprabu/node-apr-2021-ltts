// Establishing handshake with the DB
const Contact = require('../models/contact'); 

exports.getContacts = function( callback ){

  console.log(callback);

  Contact.find({}, (err, result) => {
    if(!err){
      console.log(result);
    }

    callback( err, result);
  });
  
}

exports.createContact = function( contactData, callback ) { // 1. get the form data from routes
  console.log(contactData);
  console.log(callback);

  // 2. construct a query to save the form data
  const contactDao = new Contact(contactData);
  // 3. exec the query 
  contactDao.save( (err, savedStatus) => {
    if(!err){
      console.log(savedStatus);
    }

    // 4. send the res with the o/p from db 
    callback( err, savedStatus);
  });
}

exports.getContactById =  function( id, callback ){
  console.log(id);

  Contact.findOne( {contactId: id }, (err, result) => {
    if(!err){
      console.log(result);
    }

    callback( err, result);
  });
}

exports.updateContact = function(id, updateableContactData, callback) {
  console.log(id);
  console.log(updateableContactData);

  Contact.updateOne({contactId: id, phone: 2322}, updateableContactData, (err, result) => {
    if(!err){
      console.log(result);
    }
    
    callback( err, result);
  });
}

