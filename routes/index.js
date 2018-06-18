'use strict';

const express = require('express');

module.exports = (db, middleware) => {

  const router = express.Router();

  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express', layout: 'login' });
  });

  return router;

};

