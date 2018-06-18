import expect from 'expect'
import * as todoAPI from 'todoAPI'

describe('todoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(todoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      todoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let badTodos = {a: 'b'};
      todoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      let actualTodos = todoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      let todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = todoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    let todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    },{
      id: 2,
      text: 'Other text here',
      completed: false
    },{
      id: 3,
      text: 'Some text here',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = todoAPI.filterTodos(todos, true);
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed todos when showCompleted is false', () => {
      let filteredTodos = todoAPI.filterTodos(todos, false);
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filteredTodos = todoAPI.filterTodos(todos, true);
      expect(filteredTodos[0].completed).toBe(false);
    });

  });
});
