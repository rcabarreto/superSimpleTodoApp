'use strict';

const express = require('express');

module.exports = (db, middleware) => {

  const router = express.Router();

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });


  return router;

};

