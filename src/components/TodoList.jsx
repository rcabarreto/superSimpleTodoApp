import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import * as TodoAPI from '../api/TodoAPI'

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {todos, filter} = this.props;

    let renderTodos = () => {

      let filteredTodos = TodoAPI.filterTodos(todos, filter);

      if (filteredTodos.length === 0) {
        return (
          <p className="message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div className="todoList">
        {renderTodos()}
      </div>
    )
  }

}

export default connect((state) => { return state })(TodoList);