const http = require('http');

http.createServer( (req, res) => {

  console.log(req.url); 

  console.log(req.method);

  const menu = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>`;

  res.writeHead(200, { 'Content-Type': 'text/html'});
  switch(req.url){
    case '/':
      res.write(`<html>
        <head><title>Home Page</title></head>
        <body>
          <h1>Welcome to Home Page!</h1>
          ${menu}
        </body>
      </html>
      `);
      break;
    
    case '/about': 
      res.write(`<html>
        <head><title>About Page</title></head>
        <body>
          <h1>Welcome to About Page!</h1>
          ${menu}
        </body>
      </html>
      `);
      break;

    case '/contact': 
      if(req.method == 'GET'){
        res.write(`<html>
          <head><title>Contact Page</title></head>
          <body>
            <h1>Welcome to Contact Page!</h1>
            ${menu}
            <form method="POST" action="/contact">
              <input type="text" name="firstName">
              <button type="submit">Submit</button>
            </form>
          </body>
        </html>
        `);
      }else{
        console.log(req);
        res.write(`<html>
          <head><title>Contact Page</title></head>
          <body>
            <h1>Contact Data Saved!</h1>
            ${menu}
          </body>
        </html>
        `);
      }
      
      break;
    
    case '/users': 
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.write(`users: [ 
        { name: 'Arun' }
      ]`);
     break;

    default: 
      res.writeHead(404, { 'Content-Type': 'text/html'});
      res.write(`<html>
        <head><title>Page Not Found!</title></head>
        <body>
          <h1>404 - Page Not Found!</h1>
        </body>
      </html>
      `);
  }

  res.end();

}).listen('3000', () => {
  console.log('Server started in localhost:3000');
})

