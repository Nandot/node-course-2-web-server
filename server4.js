
// express server
// load express
const express = require('express');
const hbs = require('hbs');

// file handlign module
const fs = require('fs');

// setup contacts for dynamic port
const port = process.env.PORT || 3000;

var app = express();

// register partials hbs feature
hbs.registerPartials(__dirname + '/views/partials');

// config app to load/setup hbs as the view engine
app.set('view engine', 'hbs');


// register middleware with the req & res objects
// use next to tell express once we're done
app.use((req, res, next ) => {
    // call toString to make it readable and format it nicely
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  // tell express we're done
  next();
});

// // middleware call to handle maintenance page, commentted out to disable maintenance page
// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//   });

// call to register express middleware = middleware that servers a static dir
app.use(express.static(__dirname + '/public'));


// registering hbs helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

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

app.get('/projects', (req,res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects'
  });


});

// bind the app to a port on the given machine - port 3000 common for dev
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
