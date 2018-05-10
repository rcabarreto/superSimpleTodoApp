'use strict';

let Sequelize = require('sequelize');
let env = process.env.NODE_ENV || 'development';
let sequelize;

if (env === 'production') {

  let dbconfig = {
    logging: false,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true },
    port: process.env.DATABASE_PORT,
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 1000
    }
  };

  sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PWD, dbconfig);

} else {

  sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/admin.sqlite'
  });

}



let db = {};

// IMPORTS FOR ALL MODELS

db.user = sequelize.import(__dirname + '/models/user.js');
db.token = sequelize.import(__dirname + '/models/token.js');

// STARTUP
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;