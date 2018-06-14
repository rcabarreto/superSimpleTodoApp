import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Todo from './Todo'

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp__todo-list">
        <Todo/>
      </div>
    )
  }

}

export default connect()(TodoList);



