'use strict';

const express = require('express');

module.exports = (db, middleware) => {

  const router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express', layout: 'login' });
  });


  return router;

};

