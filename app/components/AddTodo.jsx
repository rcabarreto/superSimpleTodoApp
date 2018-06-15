import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    console.log(todoText);

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="TodoApp__form">
        <form className="TodoApp__form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="TodoApp__form__input" placeholder="Add a todo..."/>
        </form>
      </div>
    )
  }

}

export default connect()(AddTodo);



