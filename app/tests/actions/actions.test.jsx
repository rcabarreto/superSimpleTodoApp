import React from 'react'
import expect from 'expect'

import * as actions from 'actions'

describe('Actions', () => {

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    let todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate delete todo action', () => {
    let action = {
      type: 'DELETE_TODO',
      id: '123'
    };
    let res = actions.deleteTodo(action.id);

    expect(res).toEqual(action);
  });

});
