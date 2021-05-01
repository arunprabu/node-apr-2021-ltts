var express = require('express');
var router = express.Router();

const contactService = require('../../services/contactService'); // 1. Connect with the service

// For File uploading using multer
var multer  = require('multer');

//var upload = multer({ dest: './public/data/uploads/' });

// if you want to have control over the saved file name
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/data/uploads/');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});

var upload = multer({ storage: storage });


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



// api/contacts/profile
router.post('/profile', upload.single('profilePic'), function(req, res, next) {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

module.exports = router;
