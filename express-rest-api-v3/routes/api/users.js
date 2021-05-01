var express = require('express');
var router = express.Router();

const usersDbConnection = require('../../config/mysqlConfig'); // 1. connect with mysql db  -- usersdb 

router.get('/', function(req, res, next) {

  usersDbConnection.query('SELECT * FROM users', (err, result) => {
    if(!err){ 
      res.json(result);
    }else{
      res.json(err);
    }
  });

});

router.post('/', function(req, res, next) {
  console.log(req.body);

  // 2. save the data in table -- users
  usersDbConnection.query('INSERT INTO users SET ?', req.body, (err, result) => {
    // 3. get the result 
    if(!err){ 
      res.json(result); // 4. send it back 
    }else{
      res.json(err);
    }
  });
  
});

router.get('/:id', function(req, res, next) { 
  console.log(req.params);
  // TODO: Work with fetching only one obj with userid and return 
  usersDbConnection.query('SELECT * FROM users WHERE userid=?', req.params.id, (err, result) => {
    if(!err){ 
      res.json(result);
    }else{
      res.json(err);
    }
  });
  
});

router.put('/:id', function(req, res, next){
  console.log(req.params);
  console.log(req.body);

  usersDbConnection.query('UPDATE users SET name=?, city=? WHERE userid=?', 
      [req.body.name, req.body.city, req.params.id], (err, result) => {
    if(!err){ 
      res.json(result);
    }else{
      res.json(err);
    }
  });
});


// TODO: Delete Users

module.exports = router;
