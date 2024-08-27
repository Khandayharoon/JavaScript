var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();



var usersRouter = require('./routes/usersRouter');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user/api', usersRouter);

module.exports = app;
