const express = require('express'); // importing express
const app = express(); //Creates an Express application. 
const port = 3000; //port num in which the express app will run

//TODO: Send separate HTML Files as response

function getTemplate(pageName){
  return `<html>
    <head><title>${pageName}</title></head>
    <body>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/users'>Users API Endpoint</a></li>
      </ul>
      <h1>${pageName} Page</h1>
    </body>
  </div>
  `;
}

app.get('/', (req, res) => {
  let homePage = getTemplate('Home');
  res.send(homePage);
});

app.get('/about', (req, res) => {
  let aboutPage = getTemplate('About');
  res.send(aboutPage);
});

app.get('/contact', (req, res) => {
  let contactPage = getTemplate('Contact');
  res.send(contactPage);
});

app.get('/users', (req, res) => {
  let users = [
    {
      firstName: 'John', 
      phone: 234235464
    },
    {
      firstName: 'Arun', 
      phone: 2423534
    }
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`Express App V1 listening at http://localhost:${port}`)
});