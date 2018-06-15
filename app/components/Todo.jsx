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
    let todoClassName = completed ? 'completed' : '';

    return (
      <div className={"todoItemContainer "+todoClassName}>
        <div className="todoItem">
          <button className="material-icons completeButton" onClick={() => {
            dispatch(actions.toggleTodo(id));
          }}>done</button>
          <div className="todoItemLabel">{text}</div>
        </div>
        <button className="material-icons deleteButton" onClick={() => {
          dispatch(actions.deleteTodo(id));
        }}>close</button>
      </div>
    )
  }

}

export default connect()(Todo);
