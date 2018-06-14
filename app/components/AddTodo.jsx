import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class AddTodo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp__form" data-reactid=".0.1">
        <input className="TodoApp__form__input" placeholder="Add a todo..."/>
      </div>
    )
  }

}

export default connect()(AddTodo);



