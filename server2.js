
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

// dynamic data template 1 - use render plugin to show content
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    // two pieces of dynamic data being injected
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

// dynamic data template 2 - home.hbs data
app.get('/home', (req,res) => {
  res.render('home.hbs', {
    // two pieces of dynamic data being injected
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my site',
    currentYear: new Date().getFullYear()
  });

});

// bind the app to a port on the given machine - port 3000 common for dev
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
