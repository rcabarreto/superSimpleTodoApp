
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp'

import * as actions from './actions'
import * as api from './api'
import * as configureStore from './store'

import 'applicationStyles'


const store = configureStore.configure();

// load and update state with the selected filters
let initialFilter = api.getFilters();
store.dispatch(actions.setFilter(initialFilter));

store.subscribe(() => {
  let state = store.getState();

  api.setTodos(state.todos);
  api.setFilters(state.filter);
});

// load and update state with user's todos
let initialTodos = api.getTodos();
store.dispatch(actions.addTodos(initialTodos));


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);
