
// express server
// load express
const express = require('express');
const hbs = require('hbs');

var app = express();

// config app to load/setup hbs as the view engine
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// setup 1st route  = '/' = root of page =  http route handlers
app.get('/',(req, res) => {
  // res.send('<h1>Hello Express!<h1>');
  // response passing an object - express convert it to a JSON object
  res.send({
    name: 'nando',
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
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
