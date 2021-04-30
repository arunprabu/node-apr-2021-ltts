var express = require('express');
var router = express.Router();

var dbConn  = require('../../config/mysqlConfig');

/* GET api/accounts . */
router.get('/', function(req, res, next) {
  dbConn.query('SELECT * FROM accounts', (err, data)=>{
    if(err){
        console.log('Error while fetching accounts', err);
        res.json(err);
    }else{
        console.log('Accounts fetched successfully');
        res.json(data);
    }
  });
});

/* POST api/accounts . */
router.post('/', function(req, res, next) {
  // reading form data in req.body
  console.log(req.body); // should save it in db

  dbConn.query('INSERT INTO accounts SET ? ', req.body, (err, data)=>{
    if(err){
      console.log('Error while inserting data');
      res.json(err);
    }else{
      console.log('Accounts created successfully');
      res.json(data);
    }
  })

});

/* GET api/accounts/:id . */
router.get('/:id', function(req, res, next) {
  console.log(req.params); // should save it in db

  dbConn.query('SELECT * FROM accounts WHERE id=?', parseInt(req.params.id), (err, data)=>{
    if(err){
      console.log('Error while fetching data');
      res.json(err);
    }else{
      console.log('Account fetched successfully');
      res.json(data);
    }
  })

});

/* PUT api/accounts/:id . */
router.put('/:id', function(req, res, next) {
  console.log(req.params.id); 
  console.log(req.body); 

  dbConn.query("UPDATE accounts SET name=?,city=? WHERE id = ?", [req.body.name,req.body.city, parseInt(req.params.id)], (err, data)=>{
    if(err){
      console.log('Error while updating data');
      res.json(err);
    }else{
      console.log('Accounts updated successfully');
      res.json(data);
    }
  })

});


module.exports = router;