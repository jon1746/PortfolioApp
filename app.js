const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Define static assets directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/what-i-do', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'what-i-do.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});

app.get('/request-quote', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'request-quote.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact-me.html'));
});

app.post('/api/create-message', (req, res) => {

  
    name=req.body.name;
    email=req.body.email;
    message=req.body.message;
    res.json({ name, email, message });
 
  });

app.post('/api/create-quote', (req, res) => {
    
console.log("You Made it here", req.body);
    name=req.body.name;
    email=req.body.email;
    message=req.body.message;
    res.json({ name, email, message });

});
// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
