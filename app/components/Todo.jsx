import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

class Todo extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'TodoApp__todo--completed' : 'TodoApp__todo';

    return (
      <div className={todoClassName}>
        <div className="TodoApp__todo__primary">
          <button className="material-icons TodoApp__todo__complete-btn" onClick={() => {
            dispatch(actions.toggleTodo(id));
          }}>done</button>
          <div className="TodoApp__todo__label">{text}</div>
        </div>
        <button className="material-icons TodoApp__todo__delete-btn" onClick={() => {
          dispatch(actions.deleteTodo(id));
        }}>close</button>
      </div>
    )
  }

}

export default connect()(Todo);
