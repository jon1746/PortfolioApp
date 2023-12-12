const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

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

app.post('api/createMessage', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'views', 'contact-me.html'));
  });

  app.post('api/createQuote', (req, res) => {
    //  res.sendFile(path.join(__dirname, 'views', 'contact-me.html'));
       
  });
// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
