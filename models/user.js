'use strict';

const bcrypt = require('bcrypt');
const _ = require('underscore');
const cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    external_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    salt: {
      type: DataTypes.STRING
    },
    password_hash: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      validate: {
        len: [7, 100]
      },
      set: function(value) {
        let salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(value, salt);
        this.setDataValue('password', value);
        this.setDataValue('salt', salt);
        this.setDataValue('password_hash', hashedPassword);
      }
    },
    gender: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'pt-BR'
    },
    timezone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "BRL"
    }
  }, {
    hooks: {
      beforeValidate: function(user, options) {
        // user.email
        if(typeof user.email === 'string') {
          user.email = user.email.toLowerCase();
        }
      }
    }
  });



  // class methods
  user.authenticate = (body) => {
    return new Promise((resolve, reject) => {
      if(typeof body.email !== 'string' || typeof body.password !== 'string'){
        return reject();
      }
      user.findOne({
        where: {
          email: body.email
        }
      }).then(function(user) {
        if (!user || !user.get('password_hash') || !bcrypt.compareSync(body.password, user.get('password_hash'))) {
          return reject();
        }else{
          resolve(user);
        }
      }, function(e){
        reject();
      });
    });
  };

  user.findByToken = (token) => {
    return new Promise((resolve, reject) => {
      try {
        let decodedJWT = jwt.verify(token, 'asdfasdf');
        let bytes = cryptojs.AES.decrypt(decodedJWT.token, 'asdf1234');
        let tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));
        user.findById(tokenData.id).then(function (user) {
          if (user) {
            resolve(user);
          } else {
            reject();
          }
        }, function (e) {
          console.error(e);
          reject();
        });
      } catch (e) {
        // error
        console.error(e);
        reject();
      }
    });
  };


  // instance methods
  user.prototype.toPublicJSON = function () {
    let json = this.toJSON();
    return _.pick(json, 'id', 'name', 'email', 'locale', 'timezone', 'currency', 'createdAt', 'updatedAt');
  };

  user.prototype.generateToken = function (type) {
    if (!_.isString(type)) {
      return undefined;
    }
    try {
      let stringData = JSON.stringify({id: this.get('id'), type: type});
      let encryptedData = cryptojs.AES.encrypt(stringData, 'asdf1234').toString();
      let token = jwt.sign({
        token: encryptedData
      },'asdfasdf');
      return token;
    } catch(e) {
      console.error(e);
      return undefined;
    }

  };

  return user;
};