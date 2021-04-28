const http = require('http'); // importing http module to work over http protocol 

http.createServer( (req, res) => {
  // will have url, method, req headers, req body, req params -- url params, query params 
  console.log(req); 

  res.write('Welcome to my Home Page!');
  res.end();
}).listen('3000', () => {
  console.log('Server is started in localhost:3000');
});