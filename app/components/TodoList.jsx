import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Todo from './Todo'
import TodoAPI from '../api/TodoAPI'

class TodoList extends Component {

  constructor(props) {
    super(props);
  }




  render() {

    let {todos} = this.props;
    let showCompleted = true;
    let searchText = '';

    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };


    return (
      <div className="TodoApp__todo-list">
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
