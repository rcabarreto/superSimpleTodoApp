import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { todoReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    todos: todoReducer
  });

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
