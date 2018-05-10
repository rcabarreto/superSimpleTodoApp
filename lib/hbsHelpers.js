'use strict';

const _ = require('underscore');
const striptags = require('striptags');
const md5 = require('md5');


exports.ifCond = function (v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.sum = function (value1, value2) {
  return parseFloat(value1)+parseFloat(value2);
};

exports.exists = function (arrSelected, strValue, options) {

  let arrValues = String(arrSelected).split(",");
  strValue = String(strValue);

  if (arrValues) {
    if ( _.contains(arrValues, strValue) ) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }
};

exports.difference = function (value1, value2) {
  return value1-value2;
};

exports.setAmountStyle = function (amount) {
  return (parseFloat(amount) < 0) ? 'text-danger' : 'text-success';
};

exports.getGravatarUrl = function (emailAddress) {
  let hash = md5(emailAddress);
  return 'https://www.gravatar.com/avatar/'+ hash +'?d=mm';
};

exports.truncateString = (string, size) => {

  let clearString = striptags(string);
  if (clearString.length > size)
    return clearString.substring(0,size)+'...';
  else
    return clearString;

};

exports.usedPercentage = function (balance, future, credit) {
  balance = parseFloat( Math.abs(balance) + Math.abs(future) );
  credit = parseFloat( Math.abs(credit) );
  return parseInt((balance * 100) / credit);
};

exports.accountTypeIcon = function (accountType) {
  if (accountType === 'credit') {
    return 'fa fa-credit-card';
  } else if (accountType === 'checking') {
    return 'fa fa-money';
  } else {
    return 'fa fa-bank';
  }
};

exports.getRecurrencyTypeText = (value, type) => {

  let returnVal = 'Every '+ value +' ';

  switch(type) {
    case 'd':
      returnVal += 'day';
      break;
    case 'w':
      returnVal += 'week';
      break;
    case 'M':
      returnVal += 'month';
      break;
    case 'y':
      returnVal += 'year';
      break;
    default:
      returnVal += 'something else';
  }

  if (value > 1)
    returnVal += 's';

  return returnVal;

};

exports.getRowStateClass = (type, balance, credit, future) => {

  let returnVal = '';

  if (type === 'credit') {

    balance = parseFloat( Math.abs(balance) + Math.abs(future) );
    credit = parseFloat( Math.abs(credit) );

    let percentage = parseInt((balance * 100) / credit);

    if (percentage > 50) {
      returnVal = 'danger';
    } else if (percentage > 40) {
      returnVal = 'warning'
    } else {
      returnVal = 'success';
    }

  } else {
    if (balance < 0) {
      returnVal = 'danger';
    } else {
      returnVal = '';
    }
  }

  return returnVal;
};