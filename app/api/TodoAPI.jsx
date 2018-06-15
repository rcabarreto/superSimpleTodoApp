const $ = require('jquery');



export var setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
};


export var getTodos = () => {
  let stringTodos = localStorage.getItem('todos');
  let todos = [];

  try {
    todos = JSON.parse(stringTodos);
  } catch (e) {

  }

  return $.isArray(todos) ? todos : [];

};


export var filterTodos = (todos, filter, searchText) => {
  let filteredTodos = todos;

  // Filter by showActive
  filteredTodos = filteredTodos.filter((todo) => {
    return todo.completed || filter.showActive;
  });

  // Filter by showCompleted
  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || filter.showCompleted;
  });

  // Filter by searchText
  filteredTodos = filteredTodos.filter((todo) => {
    let text = todo.text.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;
  });

  // Sort todos with non-completed first
  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });

  return filteredTodos;

};
