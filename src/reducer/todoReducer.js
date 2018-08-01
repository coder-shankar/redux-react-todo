import { CREATE_TODO, ADD_TODO } from "../action/todoAction";
import { CLEAR_STATE } from "../action/loginAction";

const INITIAL_STATE = {
  list: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {};

    case ADD_TODO:
      return {
        ...state,
        list: action.payload.list
      };
    case CLEAR_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default todoReducer;
