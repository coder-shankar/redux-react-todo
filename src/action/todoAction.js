export const CREATE_TODO = "CREATE_TODO";
export const ADD_TODO = "ADD_TODO";

export const createTodo = () => ({
  type: CREATE_TODO,
  payload: {}
});

export const addTodo = list => ({
  type: ADD_TODO,
  payload: {
    list: list
  }
});
