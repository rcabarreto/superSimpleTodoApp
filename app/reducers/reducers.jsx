const uuid = require('uuid/v1');
const moment = require('moment');

export var loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_LOADER':
      return !state;
    default:
      return state;
  }
};

