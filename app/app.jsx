'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp'

import * as actions from './actions/actions'
import * as TodoAPI from './api/TodoAPI'
import * as configureStore from 'configureStore'

const store = configureStore.configure();

// load and update state with the selected filters
let initialFilter = TodoAPI.getFilters();
store.dispatch(actions.setFilter(initialFilter));

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
  TodoAPI.setFilters(state.filter);
});

// load and update state with user's todos
let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);
