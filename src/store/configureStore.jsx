import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import { filterReducer, todoReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer
  });

  return createStore(reducer, initialState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

};
