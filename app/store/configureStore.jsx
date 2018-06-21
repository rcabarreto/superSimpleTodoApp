import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import { filterReducer, todoReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer
  });

  return createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

};
