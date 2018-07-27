export const SET_TODO = "SET_TODO";

export const setTodo = () => ({
  type: SET_TODO,
  payload: {}
});

export const setLoginSuccess = () => ({
  type: SET_LOGIN_SUCCESS
});

export const setLoginError = message => ({
  type: SET_LOGIN_ERROR
});
