import {
  SET_LOGIN_INFO,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from "../action/loginAction";

const INITIAL_STATE = {
  user: {
    username: "",
    password: "",
    isLogin: false
  }
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        ...state.login,
        user: {
          username: action.payload.username,
          password: action.payload.password
        }
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        ...state.login,
        user: { ...state.user, isLogin: true }
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        ...state.login,
        user: {
          isLogin: false
        }
      };

    default:
      return state;
  }
};

export default loginReducer;
