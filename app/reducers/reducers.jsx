const uuid = require('uuid/v1');
const moment = require('moment');

export var loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_LOADER':
      return !state;
    default:
      return state;
  }
};

export var filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return {
        showActive: true,
        showCompleted: true
      };
    case 'SHOW_ACTIVE':
      return {
        showActive: true,
        showCompleted: false
      };
    case 'SHOW_COMPLETED':
      return {
        showActive: false,
        showCompleted: true
      };
    default:
      return {
        showActive: true,
        showCompleted: true
      };
  }
};

export var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
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
            completedAt: newState ? moment().unix() : undefined
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