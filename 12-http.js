const http = require('http');

http.createServer( (req, res) => {

  console.log(req.url); 

  switch(req.url){
    case '/':
      res.write('Welcome to Home Page');
      break;
    
    case '/about': 
      res.write('Welcome to About Page!');
      break;

    case '/contact': 
      res.write('Welcome to Contact Page!');
      break;

    default: 
      res.write('404-Page Not Found');
  }

  res.end();

}).listen('3000', () => {
  console.log('Server started in localhost:3000');
})

