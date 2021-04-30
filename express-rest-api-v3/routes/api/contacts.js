var express = require('express');
var router = express.Router();

const contactService = require('../../services/contactService'); // 1. Connect with the service

/* GET api/contacts . */
// Listing all contacts
router.get('/', function(req, res, next) {

  // 2. Send the Req to the Service
  contactService.getContacts( (err, data ) => { // 3. Get the res from the Service
    // 4. Send the res 
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
});

/* POST api/contacts . */
// Creating Contact
router.post('/', function(req, res, next) {
  // reading form data in req.body
  console.log(req.body); // should save it in db

  contactService.createContact( req.body, (err, data) => {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });

});

/* GET api/contacts/:id */
// Get Contact Details 
// id is the URL Param -- You can find in req.params
router.get('/:id', function(req, res, next) { 

  console.log(req.params);
  const id = parseInt(req.params.id);

  // check whether the type of params is number or not and proceed
  if(!isNaN(id)){
    contactService.getContactById(req.params.id, (err, data) => {
      if(!err){
        res.json(data);
      }else{
        res.json(err);
      }
    });
  }else{
    res.json({status: 'Invalid Contact ID'});
  }
  
});

/* PUT api/contacts/:id */
// Update Contact
// id is the URL Param -- You can find in req.params
// PUT req should carry the req.body
router.put('/:id', function(req, res, next){
  console.log(req.params);
  console.log(req.body);

  const id = parseInt(req.params.id);

  if(!isNaN(id)){
    contactService.updateContact(id, req.body, (err, data) => {
      if(!err){
        res.json(data);
      }else{
        res.json(err);
      }
    });
  }else{
    res.json({status: 'Invalid Contact ID'});
  }
});




// TODO: Try patch method 

/* DELETE api/contacts/:id */
// Delete Contact -- will be used for hard delete
// id is the URL Param -- You can find in req.params
// for soft delete use put method
router.delete('/:id', function(req, res, next) {
  console.log(req.params);

  res.json({status: `Contact ID ${req.params.id} has been deleted Successfully`});
});

module.exports = router;
