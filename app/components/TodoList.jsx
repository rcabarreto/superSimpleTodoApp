import React, {Component} from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import * as TodoAPI from '../api/TodoAPI'

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {todos, filter} = this.props;
    let searchText = '';

    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, filter, searchText).map((todo) => {
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


export default connect(
  (state) => {
    return state;
  }
)(TodoList);
