import reducer from "./index";
const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return reducer(state, action);
};
