import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo, toggleStar } from '../actions/actions'

const Todo = (props) => {

  let {id, text, completed, star, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed ? 'completed' : '';

  let render_star = (star) => {

    let starClass = 'starButton';
    let starIcon = 'star_border';

    if (star) {
      starClass = 'starButtonChecked';
      starIcon = 'star';
    }

    return <button className={"material-icons "+starClass} onClick={() => { dispatch(toggleStar(id)) }}>{starIcon}</button>;

  };

  return (
    <div className={"todoItemContainer "+todoClassName}>
      <div className="todoItem">
        <button className="material-icons completeButton" onClick={() => { dispatch(toggleTodo(id)) }}>done</button>
        <div className="todoItemLabel">{text}</div>
        <div>{star}</div>
      </div>
      <button className="material-icons deleteButton" onClick={() => { dispatch(deleteTodo(id)) }}>close</button>
      {render_star(star)}
    </div>
  )

};

export default connect()(Todo);
