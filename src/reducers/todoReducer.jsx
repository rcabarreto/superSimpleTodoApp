const uuid = require('uuid/v1');
const moment = require('moment');

export var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          star: false,
          createdAt: moment().unix(),
          updatedAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => {
        if(todo.id !== action.id) {
          return todo;
        }
      });
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          let newState = !todo.completed;
          return {
            ...todo,
            completed: newState,
            updatedAt: moment().unix(),
            completedAt: newState ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    case 'TOGGLE_STAR':
      return state.map((todo) => {
        if(todo.id === action.id) {
          let newState = !todo.star;
          return {
            ...todo,
            star: newState,
            updatedAt: moment().unix()
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};