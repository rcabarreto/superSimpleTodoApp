import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { filterReducer, todoReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer
  });

  return createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

};
