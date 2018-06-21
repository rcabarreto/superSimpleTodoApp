import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo } from '../actions/actions'

const Todo = (props) => {

  let {id, text, completed, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed ? 'completed' : '';

  return (
    <div className={"todoItemContainer "+todoClassName}>
      <div className="todoItem">
        <button className="material-icons completeButton" onClick={() => {
          dispatch(toggleTodo(id));
        }}>done</button>
        <div className="todoItemLabel">{text}</div>
      </div>
      <button className="material-icons deleteButton" onClick={() => {
        dispatch(deleteTodo(id));
      }}>close</button>
    </div>
  )

};

export default connect()(Todo);
