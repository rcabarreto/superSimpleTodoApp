import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Todo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp__todo">
        <div className="TodoApp__todo__primary">
          <button className="material-icons TodoApp__todo__complete-btn">done</button>
          <div className="TodoApp__todo__label">Go to the store</div>
        </div>
        <button className="material-icons TodoApp__todo__delete-btn">close</button>
      </div>
    )
  }

}

export default connect()(Todo);
