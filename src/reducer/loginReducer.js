import { SET_LOGIN_INFO, SET_LOGIN_SUCCESS } from "../action/loginAction";
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
        user: {
          username: action.payload.username,
          password: action.payload.password
        }
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        user: { ...state.user, isLogin: true }
      };

    default:
      return state;
  }
};

export default loginReducer;
