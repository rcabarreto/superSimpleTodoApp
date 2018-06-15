const $ = require('jquery');


export var setTodos = (todoList) => {
  if ($.isArray(todoList)) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    return todoList;
  }
};

export var getTodos = () => {
  let stringTodos = localStorage.getItem('todoList');
  let todoList = [];

  try {
    todoList = JSON.parse(stringTodos);
  } catch (e) {
    console.log('Error fetching todo list!');
  }

  return $.isArray(todoList) ? todoList : [];

};

export var setFilters = (filters) => {
  localStorage.setItem('filters', JSON.stringify(filters));
  return filters;
};

export var getFilters = () => {
  let stringFilters = localStorage.getItem('filters');
  let filters = {};

  try {
    filters = JSON.parse(stringFilters);
  } catch (e) {
    console.log('Error fetching filters!');
  }

  return $.isPlainObject(filters) ? filters : {};

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
