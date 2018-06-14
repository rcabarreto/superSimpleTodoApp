'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'

const store = require('configureStore').configure();

import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);
