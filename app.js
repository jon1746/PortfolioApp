var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var whatidoRouter = require('./routes/whatido');
var galleryofmyworkRouter = require('./routes/galleryofmywork');
var getaquoteRouter = require('./routes/getaquote');
var contactmeRouter = require('./routes/contactme');
var servicesRouter = require('./routes/services');
var contactmeRouterouter = require('./routes/contact');
var quoteRouter = require('./routes/quote');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//User pages
app.use('/', indexRouter);
app.use('/whatido', whatidoRouter);
app.use('/galleryofmywork', galleryofmyworkRouter);
app.use('/getaquote', getaquoteRouter);
app.use('/contactme', contactmeRouter);
//Service calls to db

//get a list of services provided
app.use('/services', services);
//my a contact request
app.use('/contact', contact);
//get a quote for a project
app.use('/quote', quote);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
