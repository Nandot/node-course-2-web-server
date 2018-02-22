
// express server
// load express
const express = require('express');

var app = express();

// setup 1st route  = '/' = root of page =  http route handlers
app.get('/',(req, res) => {
  // res.send('<h1>Hello Express!<h1>');
  // response passing an object - express convert it to a JSON object
  res.send({
    name: 'Hernando',
    Likes: [
      'Biking',
      'Running'
    ]
  });
});

// create 2nd route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// add 3rd route
// /bad - send back json with errorMessage
app.get('/bad', (req,res) => {
  res.send({
    error: 'Unable to handle request'
  });

});

// bind the app to a port on the given machine - port 3000 common for dev
app.listen(3000);
