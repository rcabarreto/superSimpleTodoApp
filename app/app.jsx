'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp'

import * as actions from './actions/actions'
import * as TodoAPI from './api/TodoAPI'
import * as configureStore from 'configureStore'

const store = configureStore.configure();

store.subscribe(() => {
  let state = store.getState();
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);
