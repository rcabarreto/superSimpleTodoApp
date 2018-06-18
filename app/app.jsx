
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp'

import * as actions from 'actions'
import * as todoAPI from 'todoAPI'
import * as configureStore from 'configureStore'

const store = configureStore.configure();

// load and update state with the selected filters
let initialFilter = todoAPI.getFilters();
store.dispatch(actions.setFilter(initialFilter));

store.subscribe(() => {
  let state = store.getState();

  todoAPI.setTodos(state.todos);
  todoAPI.setFilters(state.filter);
});

// load and update state with user's todos
let initialTodos = todoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

import 'applicationStyles'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);
