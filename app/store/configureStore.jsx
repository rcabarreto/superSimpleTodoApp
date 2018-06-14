import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loaderReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    isLoading: loaderReducer
  });

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
