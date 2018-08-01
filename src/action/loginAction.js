export const SET_LOGIN_INFO = "SET_LOGIN_INFO";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_TOKEN = "SET_TOKEN";
export const CLEAR_STATE = "CLEAR_STATE";

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

export const setToken = (accessToken, refreshToken) => ({
  type: SET_TOKEN,
  payload: {
    accessToken,
    refreshToken
  }
});

export const clear = () => ({
  type: CLEAR_STATE
});
