export var filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        showActive: action.showActive,
        showCompleted: action.showCompleted
      };
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
      return state;
  }
};