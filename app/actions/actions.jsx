export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var filterShowAll = () => {
  return {
    type: 'SHOW_ALL'
  }
};

export var filterShowActive = () => {
  return {
    type: 'SHOW_ACTIVE'
  }
};

export var filterShowCompleted = () => {
  return {
    type: 'SHOW_COMPLETED'
  }
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export var deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};