import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {

    let properties = this.props;
    console.log(JSON.stringify(properties));

    return (
      <div className="addTodo">
        <form className="addTodoForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="addTodoInput" placeholder="Add a todo..."/>
        </form>
      </div>
    )
  }

}

export default connect()(AddTodo);
