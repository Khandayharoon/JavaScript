
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionRouter = require('./routes/session'); // Make sure this path is correct
var cookieRouter = require('./routes/cookie'); // Make sure this path is correct

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Session middleware setup
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "ndndsdmsdmfnsjdfaF"
}));

// Logger middleware setup
app.use(logger('dev'));

// Body parser middleware setup for JSON requests
app.use(express.json());

// Body parser middleware setup for URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Cookie parser middleware setup
app.use(cookieParser());

// Static file serving middleware setup
app.use(express.static(path.join(__dirname, 'public')));

// Route setup
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/session',sessionRouter);
app.use('/cookie',cookieRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(3001,()=>{
//   console.log('runnig');
// });
module.exports = app;



// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var session = require('express-session');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var sessionRouter = require('./routes/SC');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: "ndndsdmsdmfnsjdfaF"
// }));

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/SC', sessionRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
