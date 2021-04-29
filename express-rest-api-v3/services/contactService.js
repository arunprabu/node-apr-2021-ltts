
exports.getContacts = function( callback ){

  console.log(callback);

  setTimeout( () => {
    let contacts = [
      {
        id: 1,
        name: 'Arun',
        phone: 12323323,
        email: 'a@b.com'
      },
      {
        id: 2,
        name: 'Vj',
        phone: 32323,
        email: 'b@c.com'
      }
    ];
    callback(null, contacts);
  }, 2000);

  // 1. Connect with DB
  // 2. exec db query 
  // 3. get the data from db 
  // 4. send the data back to routes
}

exports.createContact = function( contactData, callback ) {
  console.log(contactData);
  console.log(callback);

  let status = {
    id: 3,
    ...contactData 
  }

  callback( null, status);
}