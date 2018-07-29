export const SET_LOGIN_INFO = "SET_LOGIN_INFO";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export const setLoginInfo = (username, password) => ({
  type: SET_LOGIN_INFO,
  payload: {
    username,
    password
  }
});

export const setLoginSuccess = () => ({
  type: SET_LOGIN_SUCCESS
});

export const setLoginError = () => ({
  type: SET_LOGIN_ERROR
});
