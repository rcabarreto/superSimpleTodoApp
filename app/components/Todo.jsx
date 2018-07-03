import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo, toggleStar } from '../actions/actions'

const Todo = (props) => {

  let {id, text, completed, star, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed ? 'completed' : '';

  let render_star = (star) => {
    if (star) {
      return 'star';
    } else {
      return 'star_border';
    }
  };

  return (
    <div className={"todoItemContainer "+todoClassName}>
      <div className="todoItem">
        <button className="material-icons completeButton" onClick={() => { dispatch(toggleTodo(id)) }}>done</button>
        <div className="todoItemLabel">{text}</div>
        <div>{star}</div>
      </div>
      <button className="material-icons deleteButton" onClick={() => { dispatch(deleteTodo(id)) }}>close</button>
      <button className="material-icons starButton" onClick={() => { dispatch(toggleStar(id)) }}>{render_star(star)}</button>
    </div>
  )

};

export default connect()(Todo);
