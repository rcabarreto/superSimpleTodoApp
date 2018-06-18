'use strict';

const express = require('express');
const path = require('path');
const createError = require('http-errors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const hbsHelpers = require('./lib/hbsHelpers');

const db = require('./db.js');
const middleware = require('./middleware.js')(db);

const indexRouter = require('./routes/index')(db, middleware);
const usersRouter = require('./routes/users')(db, middleware);

const app = express();

app.set('default locale', 'pt-BR');

// configure headers
app.use(helmet());
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.send('404');
});

module.exports = app;
