import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filters from './Filters'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class TodoApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>My Todo List</h1>
        <Filters/>
        <AddTodo/>
        <TodoList/>
      </React.Fragment>
    )
  }

}

export default connect()(TodoApp);